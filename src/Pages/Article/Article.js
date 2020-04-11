import React from 'react';
import {useParams} from 'react-router-dom';
import Post from "../../Components/Post/Post";
import image1 from "../../images/Chickadee_2.JPG";
import image2 from "../../images/Squirrel_1.jpg";
import './styles.scss';

export default function Article() {
    const {articleId} = useParams();

    return (
        <>
            <section className={'article-page-header'}>
                <div>The Article {articleId} </div>
                <div>January 04, 2020</div>
            </section>
            <section className={'article-page-text'}>The majority of these companies use the copyright symbol in the
                front, then the current year and name of the company. But this can vary without impacting protection of
                the copyright. Some add “All Rights Reserved” as well.
                <br/><br/>
                The style of notice can differ a bit between companies and individuals. And as mentioned before, the
                copyright symbol is generally not necessary. But the function of the symbol remains the same – to give
                notice that the identified work is protected by copyright.
                <br/><br/>
                Take a look at some things around you. Most likely you have plenty of examples of how the symbol is used
                in your home, office or just about anywhere. It’s just up to you to take notice.
                <br/><br/>
                LegalZoom can help you register a copyright online for your book, song, photograph, and other original
                works of authorship. Start by filling out a simple questionnaire. We will assemble your copyright
                application and file it with the U.S. Copyright Office and you will receive your Certificate of
                Registration by mail.
            </section>
            <section className={'article-nav-container'}>
                <div style={{width: '8rem', height: '8rem', border: '1px dashed white', margin: '2rem'}}/>
                <div style={{width: '8rem', height: '8rem', border: '1px dashed white', margin: '2rem'}}/>
                <div style={{width: '8rem', height: '8rem', border: '1px dashed white', margin: '2rem'}}/>
                <div style={{width: '8rem', height: '8rem', border: '1px dashed white', margin: '2rem'}}/>
                <div style={{width: '8rem', height: '8rem', border: '1px dashed white', margin: '2rem'}}/>
                <div style={{width: '8rem', height: '8rem', border: '1px dashed white', margin: '2rem'}}/>
                <div style={{width: '8rem', height: '8rem', border: '1px dashed white', margin: '2rem'}}/>
                <div style={{width: '8rem', height: '8rem', border: '1px dashed white', margin: '2rem'}}/>
                <div style={{width: '8rem', height: '8rem', border: '1px dashed white', margin: '2rem'}}/>
                <div style={{width: '8rem', height: '8rem', border: '1px dashed white', margin: '2rem'}}/>
                <div style={{width: '8rem', height: '8rem', border: '1px dashed white', margin: '2rem'}}/>
                <div style={{width: '8rem', height: '8rem', border: '1px dashed white', margin: '2rem'}}/>
                <div style={{width: '8rem', height: '8rem', border: '1px dashed white', margin: '2rem'}}/>
                <div style={{width: '8rem', height: '8rem', border: '1px dashed white', margin: '2rem'}}/>
                <div style={{width: '8rem', height: '8rem', border: '1px dashed white', margin: '2rem'}}/>
                <div style={{width: '8rem', height: '8rem', border: '1px dashed white', margin: '2rem'}}/>
                <div style={{width: '8rem', height: '8rem', border: '1px dashed white', margin: '2rem'}}/>
                <div style={{width: '8rem', height: '8rem', border: '1px dashed white', margin: '2rem'}}/>
            </section>
            <section>
                <Post image={image1} title={'Black-Capped Chickadee'}/>
                <Post image={image2} title={'American Red Squirrel'}/>
                <Post image={image1} title={'Black-Capped Chickadee'}/>
                <Post image={image2} title={'American Red Squirrel'}/>
                <Post image={image1} title={'Black-Capped Chickadee'}/>
                <Post image={image2} title={'American Red Squirrel'}/>
            </section>
        </>
    )
}