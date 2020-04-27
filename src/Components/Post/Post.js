import React, {useState, useRef, useCallback, useEffect} from 'react';
import './styles.scss';
import InfoButton from "./InfoButton/InfoButton";
import ChatButton from "./ChatButton/ChatButton";
import smoothScroll from "../../util/smoothScroll";

export default function Post({children, image, title, focusLeftPercent = 0, focusTopPercent = 0}) {
    const [showPostContent, setShowPostContent] = useState(false);
    const postTopRef = useRef(null);
    let timeoutFunction;
    let scrollPosition;
    const handleScroll = useCallback(() => {
        const scrollDelta = window.scrollY - scrollPosition || window.scrollY;
        scrollPosition = window.scrollY;
        if (
            postTopRef.current.offsetTop > window.scrollY - window.innerHeight // within one screen below
            && postTopRef.current.offsetTop < window.scrollY + window.innerHeight // within one screen above
            && window.scrollY > window.innerHeight / 2 // not in the fist half of the page height.
            && window.scrollY < document.body.clientHeight - window.innerHeight * 1.5 // not in the last half of the page height.
        ) {
            if (timeoutFunction) {
                clearTimeout(timeoutFunction);
            }
            ;
            const buffer = 0.2;
            timeoutFunction = setTimeout(() => {
                if (postTopRef.current.offsetTop > window.scrollY - window.innerHeight * buffer && postTopRef.current.offsetTop < window.scrollY + window.innerHeight * (1 - buffer) && scrollDelta > 0) {
                    smoothScroll(0, postTopRef.current.offsetTop, 0.25);
                }
                if (postTopRef.current.offsetTop > window.scrollY - window.innerHeight * (1 - buffer) && postTopRef.current.offsetTop < window.scrollY + window.innerHeight * buffer && scrollDelta < 0) {
                    smoothScroll(0, postTopRef.current.offsetTop, 0.25);
                }
            }, 200)
        }
    }, [postTopRef]);
    /**
     * On a click event, we toggle the post content regardless of the current scroll position.
     * @param e
     */
    const togglePostContent = (e) => {
        e.stopPropagation();
        if (!showPostContent) {
            smoothScroll(0, postTopRef.current.offsetTop, 0.35);
            //window.scrollTo(0, postTopRef.current.offsetTop);
        }
        setShowPostContent((prev) => !prev);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    /**
     * On a click event, if the post content is invisible, we scroll without opening. Otherwise we open the content.
     * @param e
     */
    const handlePostBodyClick = (e) => {
        e.stopPropagation();
        if (!showPostContent) {
            smoothScroll(0, postTopRef.current.offsetTop, 0.35);
            //window.scrollTo(0, postTopRef.current.offsetTop);
            if (Math.abs(postTopRef.current.offsetTop - window.scrollY) < 10) {
                setShowPostContent((prev) => !prev);
            }
        } else {
            setShowPostContent((prev) => !prev);
        }
    };

    return (
        <div className={'post-container-outer'}>
            <div ref={postTopRef}/>
            <div className={'post-header'}>{title}</div>
            <div className={'post-container'} style={{backgroundImage: `url(${image})`, backgroundPosition: `${focusLeftPercent}% calc(${focusTopPercent}% + 10vmin)`}}
                 onClick={handlePostBodyClick}>
                <div className={`overlay ${showPostContent ? 'show-content' : ''}`}>
                    <div className={'text-content'}>
                        {children}
                    </div>
                    <div className={'post-footer'}>
                        <InfoButton {...{togglePostContent}}/>
                        <ChatButton/>
                    </div>
                </div>
            </div>
        </div>
    )
}