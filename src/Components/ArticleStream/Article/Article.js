import React from 'react';
import './styles.scss';
import thumbnail from '../../../images/Chickadee_1_a.jpg'

export default function Article() {
    return (
        <div className={'article-container'}>
            <div className={'article-shadow-hover-provider'}>
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