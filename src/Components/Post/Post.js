import React, {useState, useRef} from 'react';
import './styles.scss';
import InfoButton from "./InfoButton/InfoButton";

export default function ({children, image, title}) {
    const [showPostContent, setShowPostContent] = useState(false);
    const postTopRef = useRef(null);
    /**
     * On a click event, we toggle the post content regardless of the current scroll position.
     * @param e
     */
    const togglePostContent = (e) => {
        e.stopPropagation();
        if (!showPostContent) {
            window.scrollTo(0, postTopRef.current.offsetTop);
        }
        setShowPostContent((prev) => !prev);
    };

    /**
     * On a click event, if the post content is invisible, we scroll without opening. Otherwise we open the content.
     * @param e
     */
    const handlePostBodyClick = (e) => {
        e.stopPropagation();
        if (!showPostContent) {
            window.scrollTo(0, postTopRef.current.offsetTop);
            if (postTopRef.current.offsetTop === window.scrollY) {
                setShowPostContent((prev) => !prev);
            }
        } else {
            setShowPostContent((prev) => !prev);
        }
    };

    return (
        <>
            <div ref={postTopRef}/>
            <div className={'post-header'}>{title}</div>
            <div className={'post-container'} style={{backgroundImage: `url(${image})`}}
                 onClick={handlePostBodyClick}>
                <div className={`overlay ${showPostContent ? 'show-content' : ''}`}>
                    <div className={'text-content'}>
                        {children}
                    </div>
                    <div className={'post-footer'}>
                        <InfoButton {...{togglePostContent}}/>
                    </div>
                </div>
            </div>
        </>
    )
}