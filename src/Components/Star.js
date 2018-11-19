import React from 'react';
import IconHeart from './svg/IconHeart';

class Star extends React.Component{
    
    render(){
        const color = '#f73859';
        
        return(
            <div className="favorites" onClick={()=>this.props.displayFavorites(color)}>
                <IconHeart className={"icon-heart icon"}/>
            </div>
        );
    }
}

export default Star;