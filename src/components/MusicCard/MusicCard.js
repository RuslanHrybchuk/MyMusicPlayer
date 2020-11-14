import React from 'react';
import './MusicCard.css';

function MusicCard(props) {
    return (
        <div className='musicCard-wrapper' style =
            {{
                background: `url(${props.songObject.background})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <p className="song-title">{props.songObject.title}</p>
            <p className="song-author">{props.songObject.author}</p>
            <p className="song-duration">{props.songObject.duration}</p>
            <div className="song-buttons"></div>
        </div>
    );
}

export default MusicCard;
