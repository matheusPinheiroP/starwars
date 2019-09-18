import React, { Component } from 'react';
import './Video.css';


class Video extends Component {
    render() {
        return (
            <div className="video-style">
                <iFrame src="https://player.vimeo.com/video/332575299"
                    width="940"
                    height="660"
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                    allowFullScreen>
                </iFrame>
            </div>            
        );
    }
}

export default Video;




