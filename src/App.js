import React from 'react';
import SitePage from './Pages/Site/Site'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

function App() {
    return (
        <Router>
            <Switch>
                <Route path={'/'} component={SitePage}/>
            </Switch>
        </Router>
        );
}

export default App;
