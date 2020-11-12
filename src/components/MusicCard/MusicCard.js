import React from 'react';
import './MusicCard.css';

function MusicCard(props) {
    const backgroundUrl = '../../images/m0.jpg';
    const nametag = 'Devils Trigger';

    return (
        <div className='musicCard-wrapper' style =
            {{
                background: `url(${backgroundUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <p className="song-nametag"></p>
            <p className="song-author"></p>
            <p className="song-duration"></p>
        </div>
    );
}

export default MusicCard;
