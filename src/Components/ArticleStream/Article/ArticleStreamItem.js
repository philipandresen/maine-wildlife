import React from 'react';
import './styles.scss';
import thumbnail from '../../../images/Chickadee_1_a.jpg'
import {useHistory} from 'react-router-dom';

export default function ArticleStreamItem() {
    const history = useHistory();

    function onClick() {
        history.push('/article/1234');
        window.scrollTo(0,0);
    }
    return (
        <div className={'article-container'}>
            <div className={'article-shadow-hover-provider'} onClick={onClick}>
                <div className={'article-thumbnail'}><img src={thumbnail}/></div>
                <div className={'article-summary'}>
                    <p>
                        January 04, 2020<br/>A brief outdoor Adventure
                    </p>
                    <div className={'tags'}>
                        <div>Tag 1</div>
                        <div>Tag TWO</div>
                        <div>Tag Numbah three</div>
                        <div>Black-Capped Chickadee</div>
                        <div>Tufted Titmouse</div>
                        <div>Cardinal</div>
                    </div>
                </div>
            </div>
        </div>
    )
}