import React from 'react';

export default function Hexagon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style = {{enableBackground: "new 0 0 512 512"}}>
      <g>
        <g fill = {"white"} opacity = {0.1}>
          <path d="m485.291 129.408-224-128c-3.285-1.877-7.296-1.877-10.581 0l-224 128c-3.328 1.899-5.376 5.44-5.376 9.259v234.667c0 3.819 2.048 7.36 5.376 9.259l224 128c1.643.939 3.456 1.408 5.291 1.408s3.648-.469 5.291-1.408l224-128c3.328-1.899 5.376-5.44 5.376-9.259V138.667c-.001-3.819-2.049-7.36-5.377-9.259z"/>
        </g>
      </g>
    </svg>
  );
}