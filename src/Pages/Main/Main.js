import React from 'react';
import './styles.scss';
import Header from "../../Components/Header/Header";
import Post from "../../Components/Post/Post";
import image1 from "../../images/Chickadee_2.JPG";
import image2 from "../../images/Squirrel_1.jpg";
import Article from "../../Components/ArticleStream/Article/Article";
import ArticleStream from "../../Components/ArticleStream/ArticleStream";

export default function () {

    return (
        <>
            <section>
                <Header/>
                <ArticleStream>
                    <Article/>
                    <Article/>
                    <Article/>
                </ArticleStream>
                <Post image={image1} title={'Black-Capped Chickadee'}/>
                <Post image={image2} title={'American Red Squirrel'}/>
            </section>
            <section style={{height: '1024px'}}>
                Content
            </section>
        </>

    )
}
