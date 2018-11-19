import React, {Fragment} from 'react';
import ReceipeLabel from './ReceipeLabel';
import ReceipeCard from './ReceipeCard';


class List extends React.Component {
   
    render(){
        const listItemsStyle = {
            backgroundColor: this.props.primaryColor,
            opacity: ".25"
        };
        
        return(
            <Fragment>
                <section className="list-items">
                    <div className="list-items__background" style={listItemsStyle}></div>
                    <div className="container list-items__inner">
                         {Object.keys(this.props.receipes).map(key => <ReceipeLabel 
                                key={key}
                                index={key}
                                details={this.props.receipes[key]}
                                primaryColor={this.props.primaryColor}
                                displayCard={this.props.displayCard}
                                isActive={this.props.isActive}
                                isVisible={this.props.isVisible}
                                isClicked={this.props.isClicked}/>
                            )}
                    </div>
                </section>
                <ReceipeCard receipes={this.props.receipes} card={this.props.card} isVisible={this.props.isVisible} hideCard={this.props.hideCard} addToFavorite={this.props.addToFavorite} addFormIsOpen={this.props.addFormIsOpen} toggleReceipeForm={this.props.toggleReceipeForm} handleAddInputStep={this.props.handleAddInputStep} stepInputs={this.props.stepInputs} handleChangeInputStep={this.props.handleChangeInputStep} addReceipe={this.props.addReceipe} handleRemoveInputStep={this.props.handleRemoveInputStep} handleAddInputIng={this.props.handleAddInputIng} ingInputs={this.props.ingInputs} handleChangeInputIng={this.props.handleChangeInputIng} handleRemoveInputIng={this.props.handleRemoveInputIng} changeFormIsOpen={this.props.changeFormIsOpen} updateReceipe={this.props.updateReceipe} deleteReceipe={this.props.deleteReceipe} deleteFormIsOpen={this.props.deleteFormIsOpen} pseudo={this.props.pseudo}/>
            </Fragment>
        );
    }
}

export default List;