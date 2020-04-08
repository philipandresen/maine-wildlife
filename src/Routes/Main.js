import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import MainPage from '../Pages/Main/Main';

export default function () {
    return (
        <Router>
            <Switch>
                <Route component={MainPage}/>
            </Switch>
        </Router>
    )
}


