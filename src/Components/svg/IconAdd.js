import React from 'react';

const IconAdd = ({
  style = {},
  width = "20px",
  height = "20px",
  className = "",
  viewBox = "0 0 20 20"
}) => {
    
    return(
        <svg 
            viewBox={viewBox}
            width={width} 
            height={height}
            className = {className}
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <path d="M16 2h-12c-1.1 0-2 0.9-2 2v12c0 1.1 0.9 2 2 2h12c1.1 0 2-0.9 2-2v-12c0-1.1-0.9-2-2-2zM15 11h-4v4h-2v-4h-4v-2h4v-4h2v4h4v2z"></path>
        </svg>
    );
}


export default IconAdd;