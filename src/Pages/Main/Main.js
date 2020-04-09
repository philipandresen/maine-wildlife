import React from 'react';
import './styles.scss';
import Background from '../../images/Chickadee_1_a.jpg';

export default function () {
    return (
        <>
            <section>
                <div className={'header'}>
                    <div className={'text-overlay'}>
                        <div className={'text-overlay-menu'}>
                            <div className={'text-overlay-menu-item'}>Menu One</div>
                            <div className={'text-overlay-menu-item'}>Menu Two</div>
                            <div className={'text-overlay-menu-item'}>Menu Three</div>
                        </div>
                        <div className={'text-overlay-title'}>Maine Wildlife</div>
                    </div>
                    <div><img src={Background}/></div>
                </div>
                <div className={'article-container-container'}>
                    <div className={'article-container'}>
                        <article>
                            <h1>Header One in an article</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                                galley of type and scrambled it to make a type specimen book. It has survived not only five
                                centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                                passages, and more recently with desktop publishing software like Aldus PageMaker including
                                versions of Lorem Ipsum.</p>
                        </article>
                        <article>
                            <h1>Yet another article, haHA!</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                                galley of type and scrambled it to make a type specimen book. It has survived not only five
                                centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                                passages, and more recently with desktop publishing software like Aldus PageMaker including
                                versions of Lorem Ipsum.</p>
                        </article>
                    </div>
                </div>
            </section>
            <footer>
                Footer!
            </footer>
        </>
    )
}
