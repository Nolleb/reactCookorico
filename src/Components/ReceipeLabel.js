import React from 'react';
import IconHeart from './svg/IconHeart';


class ReceipeLabel extends React.Component{
    
    render(){
        if(!this.props.details){
            return null;
        }
        const btnStyle = {
            backgroundColor: this.props.primaryColor
        };
        const {image, name, subname, category, favorite} = this.props.details;
        const bake = this.props.details && this.props.details.time ? this.props.details.time.bake : null;
        const prep = this.props.details && this.props.details.time ? this.props.details.time.prep : null;
        
        let isAvailable;
        if(!this.props.isClicked){
            isAvailable= category === this.props.isActive;
        }else{
            isAvailable= favorite === "active";
        }
        
              
        if(!isAvailable || !this.props.isVisible){
            return null;
        }
        
        return(
             <div className="label-receipe">
                <div className="label-receipe__icons2">
                    <div className="label-receipe__time">
                        <div className="label-receipe__icon--small">Cuis.</div>
                        <div className="label-receipe__nb">{bake} m</div>
                    </div>
                    <div className="label-receipe__time">
                        <div className="label-receipe__icon--small">Prep</div>
                        <div className="label-receipe__nb">{prep} m</div>
                    </div>
                </div>
                <img className="label-receipe__img" src={image} alt=""/>
                <div className="label-receipe__top">
                    {favorite === "active" ? <div className="label-receipe__icon"><IconHeart className={"icon"}/></div> : null}             
                </div>
                <div className="label-receipe__bottom">
                    <div className="label-receipe__title2">
                        {name}
                    </div>
                    <span className="label-receipe__subtitle2">{subname}</span>
                </div>
                <a href="#" className="label-receipe__btn" style={btnStyle} onClick={()=>this.props.displayCard(this.props.index)}>
                    See receipe
                </a>
            </div> 
        );
    }
}

export default ReceipeLabel;
