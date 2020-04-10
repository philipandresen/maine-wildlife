import React from 'react';
import './styles.scss';

export default function ArticleStream({children}) {
    return (
        <div className={'article-stream'}>
            {children}
        </div>
    )
}