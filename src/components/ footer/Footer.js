import React from 'react';
import './Footer.css';
import { AiFillBackward, AiFillForward, AiOutlinePause} from 'react-icons/ai';
import { ImPlay3 } from "react-icons/im";

function Footer(props) {
    return (
        <div className='footer-wrapper'>
            <div className='play-buttons'>
                <div className='previousTrack button'><AiFillBackward color='#CACACA' size='24px'/></div>
                <div className='play button'><ImPlay3 color='#D3D3D3' size='28px' /></div>
                <div className='nextTrack button'><AiFillForward color='#CACACA' size='24px'/></div>
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
