import React from 'react';
import SpeechBubbleIcon from "../../svg/SpeechBubbleIcon";
import './styles.scss';

export default function ChatButton() {
    return (
        <div className={'chat-button-wrapper'}>
            <SpeechBubbleIcon/>
        </div>
    )
}