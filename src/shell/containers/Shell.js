import React, { Component } from 'react';


import AppHeader from '../components/AppHeader';
import MainContent from '../components/Content';
import HomePage from '../../modules/home/containers/HomePage';
import { Layout, Button, Drawer, Icon, Menu } from 'antd';

import { connect } from 'react-redux';
import RoutePath from '../../route';
import history from '../../route/history';

import '../styles/index.scss';
import 'antd/dist/antd.css';


const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;

let lang;
let unlisten;

const menuItems = ["Dashboard", "Members", "Reports", "E-card", "For support"];

class Shell extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSignedIn: false

        };

    }
   
    
UNSAFE_componentWillReceiveProps(nextProps) {
       
    }
    
    render() {
        return (<div className="shell">
             {this.state.isSignedIn  && <AppHeader 
                    isSignedIn={this.props.isSignedIn}
                   />
             }
                <div className="main_content">
                    <MainContent/>
                </div>
               
            
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isSignedIn: state.authenticationReducer.loggedIn
    }
}

export default connect(mapStateToProps, { })(Shell);