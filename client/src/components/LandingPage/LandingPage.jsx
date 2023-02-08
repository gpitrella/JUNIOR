import React from 'react';
import $ from 'jquery'; 
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import logo from './logoJRremovebg.png';
import { useLottie } from "lottie-react";
import rocketLP from '../../assets/rocketLP.json';
import './LandingPage.scss';
import track from '../../assets/junior_track.mp3';
import {Howl, Howler} from 'howler';
import play from '../../assets/play.png';
import mute from '../../assets/mute.png';

export default function LandingPage() {

    const [ sound, setSound ] = React.useState(false);
    const music = new Howl({
        src: [track],
        loop: true,
      });
    const handleClick = () =>{
        setSound(!sound);
    }
    React.useEffect(() => {
        if(sound) {
            music.play();
        } else {
            music.pause();        
        }  
        return () => {
            music.pause();
        }
      }, [sound]);

    // Lottie 
    const options = {
        animationData: rocketLP,
        loop: true
      };
    const { View } = useLottie(options);

    return (
        <>
        { sound 
            ? <div class="container-sound-buttom"><img src={play} alt="Play Buttom Sound" className='sound-button' onClick={()=>{handleClick()}}/></div>
            : <div class="container-sound-buttom"><img src={mute} alt="Stop Buttom Sound" className='sound-button' onClick={()=>{handleClick()}}/></div>
        }
        <div className="landingpageContainer">
            <Link to='/home'>
                <div>
                    <div className='night'>
                        <img src={logo} className='logolandingpage'/>
                        <span className='moon'></span>
                        <span className="spot1"></span>
                        <span className="spot2"></span>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>	
                        </ul>
                    </div>
                </div>
            </Link>
            <div>
                <Typewriter
                    options={{
                        strings: ['En JUNIOR potencia tu carrera como DESARROLLADOR'],
                        autoStart: true,
                        loop: true,
                        delay: 50,
                        pauseFor: 20000
                    }}
                />
            </div>
            <span id='rocketLandingPage'>
                { View }
            </span>
        </div>
        </>
    )
}