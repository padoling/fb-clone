import React from 'react'
import "./Feed.css"
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'

function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            
            <Post
                profilePic={"https://cataas.com/cat"}
                message={"WOW this works"}
                timestamp={"This is a timestamp"}
                username={"padoling"}
                image={"https://cataas.com/cat"}
            />
            <Post />
            <Post />
        </div>
    )
}

export default Feed
