import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from '../../modules/home/containers/HomePage';
import Dashboard from '../../modules/dashboard/containers/Dashboard';
import RoutePath from '../../route';

const MainContent = (props) => {

    return (<div className={"content"}>
        <Switch>
            <Redirect exact from='/' to={RoutePath.HOME_PAGE} />
            <Route exact path={RoutePath.HOME_PAGE} component={HomePage} />
            <Route exact path={RoutePath.DASHBOARD} component={Dashboard} />
            
        </Switch>

    </div>)
}


export default MainContent;

