import React from 'react';
import './Content.css';
import MusicCard from "../MusicCard/MusicCard";

function Content(props) {
    return (
        <div className='content-wrapper'>
            <MusicCard />
        </div>
    );
}

export default Content;
