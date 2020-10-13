import React from 'react'
import "./StoryReel.css"
import Story from './Story'

function StoryReel() {
    return (
        <div className="storyReel">
            <Story image="https://cataas.com/cat" profileSrc="ee" title="murum" />
            <Story image="https://cataas.com/cat" profileSrc="ee" title="kk" />
            <Story image="https://cataas.com/cat" profileSrc="ee" title="punchy" />
            <Story image="https://cataas.com/cat" profileSrc="ee" title="golddie" />
            <Story image="https://cataas.com/cat" profileSrc="ee" title="dotty" />
        </div>
    );
}

export default StoryReel
