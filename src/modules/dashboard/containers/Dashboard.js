import React, { Component } from 'react';
import { connect } from 'react-redux';
import Content from '../components/Content';
import '../styles/index.scss';

let lang;

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {};

    }

    render() {
        return (<div className="dashboard" >
                <Content/>
            
        </div>)
    }
}
const mapStateToProps = (state) => {
    return {
        //dashboard: state.authReducer.data
        
    }
}

export default connect(mapStateToProps, { })(Dashboard);