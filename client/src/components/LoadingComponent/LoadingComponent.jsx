import React from 'react';
import s from './LoadingComponent.module.css';
import { useLottie } from "lottie-react";
import loadingComponent from '../../assets/loadingComponent.json';


export default function LoadingComponent({ width }) {
    // Lottie
    const style = {
        width: width,
      };

    const options = {
        animationData: loadingComponent,
        loop: true,
        style: style
      };

    const { View } = useLottie(options);

    return (
        <div className={s.main_loadingComponent}>
            { View } 
        </div>
    )
}