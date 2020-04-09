import React from 'react';
import InformationIcon from "../../svg/InformationIcon";
import './styles.scss';

export default function ({togglePostContent}) {
    return (
        <div className={'info-wrapper'} onClick={togglePostContent}>
            <InformationIcon/>
        </div>
    )
}