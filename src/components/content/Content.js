import React from 'react';
import './Content.css';
import MusicCard from "../MusicCard/MusicCard";

function Content(props) {

    const musicList = [
        {
            id: 1,
            title: 'Devils Trigger',
            author: 'Casey Edwards',
            duration: '6:45',
            background: '../../images/m0.jpg',
            audioUrl: '../../audio/Devils Trigger.mp3'
        },
        {
            id: 2,
            title: 'Breaking the habit',
            author: 'Linkin Park',
            duration: '3:16',
            background: '../../images/m1.jpg',
            audioUrl: '../../audio/linkin_park_-_breaking_the_habit_(zv.fm).mp3'
        },
        {
            id: 3,
            title: 'The red baron',
            author: 'Sabaton',
            duration: '3:22',
            background: '../../images/m3.jpg',
            audioUrl: '../../audio/sabaton_-_the_red_baron.mp3'
        },
        {
            id: 4,
            title: 'Yandere Song',
            author: 'MiatriSs',
            duration: '4:34',
            background: '../../images/m2.jpg',
            audioUrl: '../../audio/MiatriSs - Yandere Song.mp3'
        }
    ]

    return (
        <div className='content-wrapper'>
            {
                musicList.map(song => <MusicCard songObject = {song}/>)
            }
        </div>
    );
}

export default Content;
