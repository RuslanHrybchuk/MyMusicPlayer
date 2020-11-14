import React from 'react';
import './Footer.css';
import { FaPlay, FaAngleLeft, FaAngleRight} from 'react-icons/fa';

function Footer(props) {
    return (
        <div className='footer-wrapper'>
            <div className='play-buttons'>
                <div className='previousTrack button'><FaAngleLeft color='#CACACA' size='24px'/></div>
                <div className='play button'><FaPlay color='#D3D3D3' size='18px' /></div>
                <div className='nextTrack button'><FaAngleRight color='#CACACA' size='24px'/></div>
            </div>
            <div className='timeline'>
                <div className='playhead'></div>
                <div className='hover-playhead'></div>
            </div>
            <div className='sound-volume'></div>
            <div className='control-buttons'></div>
        </div>
    );
}

export default Footer;
