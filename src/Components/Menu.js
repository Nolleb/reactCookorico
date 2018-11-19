import React from 'react';
import MenuItem from './MenuItem';

class Menu extends React.Component {
   
    render(){
        return(
            <div className="submenu">
                <div className="container submenu__inner">
                    <ul className="submenu__list">
                        {Object.keys(this.props.menuItems).map(key => <MenuItem 
                                key={key}
                                index={key}                               
                                details={this.props.menuItems[key]}
                                updatePrimaryColor={this.props.updatePrimaryColor}
                                updateMenuItem={this.props.updateMenuItem}
                                card={this.props.card}                               
                                hideCard={this.props.hideCard}
                                receipes={this.props.receipes}
                                />
                        )}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Menu;