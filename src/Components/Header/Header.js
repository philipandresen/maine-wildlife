import React from 'react';
import Background from '../../images/Chickadee_1_a.jpg';
import './styles.scss';

export default function () {
    // The header is a 90vh component with moving / scaling text and images with a fixed image background?

    return (
            <section className={'main-header-container'} style={{backgroundImage: `url(${Background})`}}>
                <div className={'overlay'}>
                    {/*Transparent overlay here*/}
                    <div className={'title-content'}>
                        Maine Wildlife
                    </div>
                </div>
                <div className={'scroll-down'}/>
            </section>
    )
}