import React from 'react';

import s from './ImageLoader.module.css';
import ImageNotFound from '../SVG/ImageNotFound';
import Loading from '../SVG/Loading';

export default function ImageLoader({ image, alt, setImageLoaded = null, delay = 500}) {

  let [ errorLoadingImage, setErrorLoadingImage ] = React.useState(false);
  let [ showImage, setShowImage ] = React.useState(false);
  let [ delayLoading, setDelayLoading ] = React.useState(true);

  React.useEffect(() => {
    let idTimeOut = setTimeout(() => setDelayLoading(false), Math.random() * 100 + delay);
    return (() => {
      clearTimeout(idTimeOut);
    })
  }, []);

  React.useEffect(() => {
    if (setImageLoaded && showImage && !delayLoading) setImageLoaded();
  }, [showImage, delayLoading])

  let handleErrorImageNotFound = function() {
    setErrorLoadingImage(true);
  }

  let handleLoadImage = function() {
    setShowImage(true);
  }

  return (
    <>
    {
      ((!showImage && !errorLoadingImage) || delayLoading) && 
      <div className = {s.imageContainer}>
        <div className = {s.loadingContainer}>
          <Loading />
        </div>
      </div>
    }
    {
      !errorLoadingImage &&
      <img 
        src = {image ? image : 'NO-IMAGE'} 
        alt = {alt}
        onError = {handleErrorImageNotFound}
        onLoad = {handleLoadImage} 
        className = {`${s.image} ${ !showImage || delayLoading ? s.dontShowImage : '' }`}
      />
    }
    { 
      errorLoadingImage && !delayLoading &&
      <div className = {s.imageContainer}>
        <div className = {s.svgContainer}>
          <ImageNotFound />
        </div>
      </div>
    }
    </>
  );
}