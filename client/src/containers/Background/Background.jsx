import React from 'react';
import './Background.scss';

/**
 * Features of GPT3
 * @return {element} a component that shows GPT3 features
 */
const Background = () => {
	return (
        <>
		<div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div id="horizon">
            <div className="glow"></div>
        </div>
        <div id="earth"></div>
            {/* <div id="title">
                GRAVITY
            </div>
            <div id="subtitle">
                <span>
                    DONT
                </span>
                <span>
                    LET
                </span>
                <span>
                    GO
                </span>
            </div> */}
        </>
	)
}

export default Background;

