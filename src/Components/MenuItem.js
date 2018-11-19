import React from 'react';

class MenuItem extends React.Component {
    displayMenuItems = (event) => {
        event.preventDefault();
        const menuItemClicked = event.target.parentNode;
        const colorActive = this.props.details.color;
        const category = this.props.details.category;
        const cardID = Object.keys(this.props.card);
        
        this.props.updatePrimaryColor(colorActive);

        
        const elems = document.querySelectorAll(".submenu__item ");
            [].forEach.call(elems, function(el) {
            el.classList.remove("active");
        });
        menuItemClicked.classList.add("active");
        
        this.props.updateMenuItem(category);
        
       
        if(cardID !== undefined){
            this.props.hideCard(cardID);
        }
       
    };
    
    displayNbReceipes = () => {
        let count =0;
        const receipes = Object.keys(this.props.receipes).map(key => this.props.receipes[key]);
        receipes.map(el=>{
            if(!el){
                return null;
            }else if(el.category === this.props.details.category){
                count ++;
            }                                    
        });
        return count
    }
 
    render(){

        const {name, color} = this.props.details;
        let className = 'submenu__item submenu__item--';
        if(this.props.index){
            className += this.props.index;
        }
        
        return(
            <li className={className} style={{color:color}}>
                <h2 className="heading-secondary">{name}</h2>
                <span className="submenu__total-items">{this.displayNbReceipes()} receipes</span>
                <a href="#" className="u-global-link submenu__link" onClick={this.displayMenuItems}></a> 
            </li>
        );
    }
}

export default MenuItem;