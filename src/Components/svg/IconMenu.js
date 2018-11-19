import React from 'react';

const IconMenu = ({
  style = {},
  whiteColor = "white",
  width = "20px",
  height = "20px",
  className = "icon-inverted",
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
            <path d="M15.5 11h-11c-0.275 0-0.5 0.225-0.5 0.5v1c0 0.276 0.225 0.5 0.5 0.5h11c0.276 0 0.5-0.224 0.5-0.5v-1c0-0.275-0.224-0.5-0.5-0.5zM15.5 7h-11c-0.275 0-0.5 0.225-0.5 0.5v1c0 0.276 0.225 0.5 0.5 0.5h11c0.276 0 0.5-0.224 0.5-0.5v-1c0-0.275-0.224-0.5-0.5-0.5zM10.5 15h-6c-0.275 0-0.5 0.225-0.5 0.5v1c0 0.276 0.225 0.5 0.5 0.5h6c0.276 0 0.5-0.224 0.5-0.5v-1c0-0.275-0.224-0.5-0.5-0.5zM15.5 3h-11c-0.275 0-0.5 0.225-0.5 0.5v1c0 0.276 0.225 0.5 0.5 0.5h11c0.276 0 0.5-0.224 0.5-0.5v-1c0-0.275-0.224-0.5-0.5-0.5z"></path>
        </svg>
    );
}


export default IconMenu;