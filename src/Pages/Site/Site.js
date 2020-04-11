import React from 'react';
import './styles.scss';
import MainPage from '../Main/Main';
import {
    Switch,
    Route
} from "react-router-dom";
import ArticlePage from '../Article/Article';

export default function Site() {
    return (
        <>
            <section>
                {/*Universal Header goes here if applicable*/}
            </section>
            <Switch>
                <Route path={'/article/:articleId'} component={ArticlePage}/>
                <Route path={'/'} component={MainPage}/>
            </Switch>
            <section className={'universal-footer'}>
                info@MaineWildlife.org  |  ©2019 - 2020 Philip Andresen
                <br/><br/>
                MaineWildlife.org is a single page react web application developed by Philip A. The images on this site
                are the sole property of the site owner and may not be used or redistributed for any purpose.
            </section>
        </>
    )
}