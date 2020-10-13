import React, { useState } from 'react';

import { Select, Row, Form, Icon, Col, Input } from 'antd';
const Option = Select.Option;

const businessType = [{ name: "Reatailer", id: "RT" },
{ name: "Whole-saler", id: "WS" },
{ name: "Dealer", id: "DL" },
{ name: "Trader", id: "TR" },
{ name: "Supplier", id: "SL" },
{ name: "Distributor", id: "DT" },
{ name: "Others", id: "OT" }];

const country = [{name:"Afhghanisthan", code:"1"}
,{name:"Brazil", code:"2"},
{name:"Canada", code:"3"},
{name:"Denmark",code:"4"},
{ name:"Egypt", code:"5"},
{name:"France", code:"6"},
{name:"Germany",code:"7"},
{name:"Hungary" , code:"8"},
{name:"India", code:"9"},
{name:"Japan", code:"10"}
];


const SignUpForm = (props) => {
    let { getFieldDecorator } = props.form;

    const onFinish = values => {
        console.log('Success:', values);
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };


    function onLogin() {
        props.onLoginClick();
    }

    const validateUserName = (rule, value, callback) => {
        callback();
        // if (value && value.length < 6) {
        //     callback('Requires minimum 3 characters');
        // } else if (value && value.length > 20) {
        //     callback('Customer Name should not be more than 20 characters');
        // }
        // else {
        //     callback();
        // }
    }

    const onInputChange = (e, elementName) => {
        let inputField = e.target;
        console.log("User", inputField);
    }

    const onReset =(event)=>{
        event.preventDefault();
        props.form.resetFields();
    }

    const onSignUp = (event) => {

        event.preventDefault();
        props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                let userData = reconstructData(values);
                props.registerUser(userData);
            }
        });
    }
    const reconstructData = (data) => {
        return {
            country: data.country,
            email: data.email,
            username: data.userName,
            firstName: data.firstName,
            lastName: data.lastName,
            hash: data.password,
            emailId: data.email,
            
        }
    }

    return (
        <Row className="signup_outer_container">
            <Col className="signup_container">
                <div className="logo-container">
                    <label>Sign Up</label>
                </div>

                <Form className="form"
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >

                    <Form.Item label="First name">
                        {getFieldDecorator('firstName', {
                            rules: [{
                                required: true, message: 'Please enter First name',
                            },
                            {
                                validator: validateUserName
                            }],
                            onChange: (e) => onInputChange(e, 'firstName'),
                            initialValue: null
                        })(
                            <Input type="firstName"
                                name="firstName" placeholder="First name" />
                        )}

                    </Form.Item>
                    <Form.Item label="Last name">

                        {getFieldDecorator('lastName', {
                            rules: [{
                                required: true, message: 'Please select last name',
                            },
                            {
                                validator: validateUserName
                            }],
                            onChange: (e) => onInputChange(e, 'lastName'),
                            initialValue: null
                        })(
                            <Input  type="lastName"
                                name="lastName" placeholder="Last name" />
                            )}

                    </Form.Item>
                    <Form.Item label="User name">
                        {getFieldDecorator('userName', {
                            rules: [{
                                required: true, message: 'Please enter User name',
                            },
                            {
                                validator: validateUserName
                            }],
                            onChange: (e) => onInputChange(e, 'userName'),
                            initialValue: null
                        })(
                            <Input type="userName"
                                name="userName" placeholder="User name" />
                        )}

                    </Form.Item>

                    <Form.Item label="Password">
                        {getFieldDecorator('password', {
                            rules: [{
                                required: true, message: 'Please enter Password',
                            },
                            {
                                validator: validateUserName
                            }],
                            onChange: (e) => onInputChange(e, 'password'),
                            initialValue: null
                        })(
                            <Input type="password"
                                name="password" placeholder="Password" />
                        )}

                    </Form.Item>

                    <Form.Item label="Re-type passoword">
                        {getFieldDecorator('retypePassword', {
                            rules: [{
                                required: true, message: 'Please enter password again',
                            },
                            {
                                validator: validateUserName
                            }],
                            onChange: (e) => onInputChange(e, 'retypePassword'),
                            initialValue: null
                        })(
                            <Input type="retypePassword"
                                name="retypePassword" placeholder="Type password again" />
                        )}

                    </Form.Item>

            
                    <Form.Item label="Country">
                        {getFieldDecorator('country', {
                            rules: [{
                                required: false, message: 'Please select Country',
                            },
                            {
                                validator: validateUserName
                            }],
                            onChange: (e) => onInputChange(e, 'country'),
                            initialValue: null
                        })(
                            <Select type="country"
                                name="country " placeholder="Country" >
                                {country.map((type) => (
                                    <Option key={type.id} value={type.name}>
                                        {type.name}
                                    </Option>
                                ))}
                            </Select>
                        )}

                    </Form.Item>


                    <Form.Item label="Email">
                        {getFieldDecorator('email', {
                            rules: [{
                                required: true, message: 'Please enter Email',
                            },
                            {
                                validator: validateUserName
                            }],
                            onChange: (e) => onInputChange(e, 'email'),
                            initialValue: null
                        })(
                            <Input.TextArea type="email"
                                name="email" placeholder="Email" />
                        )}

                    </Form.Item>

                </Form>

                <div>
                    <button className="back-button" onClick={props.onBackButtonClick}>{`<< Back`}</button>
                    <button className="back-button" onClick={onReset}>Reset</button>
                    <button className="button" onClick={onSignUp}>Submit</button>
                </div>
            </Col>
        </Row>

    )
}
const SignUp = Form.create()(SignUpForm);


export default SignUp;