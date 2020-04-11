import React from 'react';
import './styles.scss';
import Header from "../../Components/Header/Header";
import ArticleStreamItem from "../../Components/ArticleStream/Article/ArticleStreamItem";
import ArticleStream from "../../Components/ArticleStream/ArticleStream";

export default function () {

    return (
        <>
            <Header/>
            <section>
                <ArticleStream>
                    <ArticleStreamItem/>
                    <ArticleStreamItem/>
                    <ArticleStreamItem/>
                </ArticleStream>
            </section>
        </>

    )
}
