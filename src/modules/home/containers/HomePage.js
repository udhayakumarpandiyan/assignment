import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import { userLogin, registerUser } from '../../../store/actions/authentication';
import '../styles/index.scss';
import RoutePath from '../../../route';

let lang;

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = { selectedLanguageIndex: this.props.languageIndex || 0 , showSignUp: false};

    }

    componentDidMount() {
        lang = this.props.language ? this.props.language.login : {};

        let element = document.getElementById("username");
        if (element) {
            element.focus();
        }

    }
    componentWillReceiveProps(nextProps) {
        if (this.props.registeredUser !== nextProps.registeredUser) {
           
        }
        if(this.props.loggedIn !== nextProps.loggedIn){
            RoutePath.redirect(RoutePath.DASHBOARD);
        }
    }


    userLogin = (user) => {
        //this.props.userLogin(user);
        console.log("SDfdf");
        RoutePath.redirect(RoutePath.DASHBOARD);
    }

    registerUser = (userData) => {
        this.props.registerUser(userData);
    }


    goBack = () => {
        this.setState({ showSignUp: !this.state.showSignUp });
    }

    render() {
        return (<div className="home_page" >

            {this.state.showSignUp ? <div className="signup_content">

                <SignUp onBackButtonClick={this.goBack}
                    registerUser={this.registerUser} />
            </div>
                : <div className="signin_content">
                    <SignIn
                        userLogin={this.userLogin}
                        onSignupClick={this.goBack} />

                </div>
            }
        </div>)
    }
}
const mapStateToProps = (state) => {
    return {
        loggedIn: state.authReducer && state.authReducer.loggedIn,
        registeredUser: state.authReducer && state.authReducer.registeredUser
    }
}

export default connect(mapStateToProps, { userLogin, registerUser })(HomePage);