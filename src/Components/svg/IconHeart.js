import React from 'react';

const IconHeart = ({
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
            <path d="M17.19 4.155c-1.672-1.534-4.383-1.534-6.055 0l-1.135 1.042-1.136-1.042c-1.672-1.534-4.382-1.534-6.054 0-1.881 1.727-1.881 4.52 0 6.246l7.19 6.599 7.19-6.599c1.88-1.726 1.88-4.52 0-6.246z"></path> 
        </svg>
    );
}


export default IconHeart;