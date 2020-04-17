import React from 'react';
import SitePage from './Pages/Site/Site'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Resume from "./Components/Resume/Resume";

function App() {
    return (
        <Router>
            <Switch>
                <Route path={'/resume'} component={Resume}/>
                <Route path={'/'} component={SitePage}/>
            </Switch>
        </Router>
        );
}

export default App;
