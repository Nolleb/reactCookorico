import React from 'react';

const IconEdit = ({
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
            <path d="M18.174 1.826c-1.102-1.102-2.082-0.777-2.082-0.777l-8.639 8.632-1.453 4.319 4.317-1.454 8.634-8.638c0 0 0.324-0.98-0.777-2.082zM10.605 11.605l-0.471 0.47-1.473 0.5c-0.104-0.24-0.234-0.477-0.498-0.74s-0.5-0.394-0.74-0.498l0.5-1.473 0.471-0.47c0 0 0.776-0.089 1.537 0.673 0.762 0.761 0.674 1.538 0.674 1.538zM16 17h-13v-13h5l2-2h-7c-1.1 0-2 0.9-2 2v13c0 1.1 0.9 2 2 2h13c1.1 0 2-0.9 2-2v-7l-2 2v5z"></path>
        </svg>
    );
}


export default IconEdit;