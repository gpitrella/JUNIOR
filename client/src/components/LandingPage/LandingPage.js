import React from 'react';
import $ from 'jquery'; 
import { Link } from 'react-router-dom';
import './LandingPage.scss';

export default function LandingPage() {

    setTimeout(function() {
        $('svg.divider').attr('class', 'divider queued');
    }, 500);
    setTimeout(function() {
        $('.animated-block').addClass('queued');
    }, 1000);
    
    $(window).on('resize', function() {
        $('.text-wrapper').css('background', 'none');
        setTimeout(function() {
            $('.text-wrapper').removeAttr('style');
    }, 5);
    });


    return (
        <div>
        <div className="panel -top">
            <div className="animated-block">
            <Link to="/home">
                <div className="text-wrapper -left">
                    <span className="animated-text -left">JUNIOR</span>                  
                </div>
                <div className="text-wrapper -right">
                    <span className="animated-text -right">SENIOR</span>
                </div>
                <svg className="divider">
                    <line x1="100%" y1="0" x2="0" y2="100%"/>
                </svg>
            </Link> 
            </div>
        </div>
        <svg width="0" height="0" style={{display: "block"}}>
            <defs>
                <clipPath id="clipPathLeft" clipPathUnits="objectBoundingBox">
                    <polygon points="0 1,0.75 1,1 0,0 0" />
                </clipPath>
                <clipPath id="clipPathRight" clipPathUnits="objectBoundingBox">
                    <polygon points="0.25 0,1 0,1 1,0 1" />
                </clipPath>
            </defs>
        </svg>
        </div>
      
    )
}







