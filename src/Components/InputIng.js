import React from 'react';

class InputIng extends React.Component{
    render(){
        
        //const {quantity, unit, name} = this.props.details;
        const index = this.props.index;
        let quantityID= `quantity-${index}`;
        let unitID = `unit-${index}`;
        let nameID = `name-${index}`;
        
        return(
            <div className="input-field input-field--step">    
                <div className={`input-field__inner input-field__inner--ing input-field__inner--ing-${index}`}>
                    <span className="input-field-block">
                        <label className="edit-label" htmlFor={quantityID}>{`quantity-${index}`}</label>
                        <input
                          type="text"
                          name={quantityID}
                          data-id={index}
                          id={quantityID}
                          className="quantity"
                          onChange={this.props.handleChangeInputIng}
                          placeholder="Quantité"
                        />
                    </span>
                    <span className="input-field-block">
                        <label className="edit-label" htmlFor={unitID}>{`Unit-${index}`}</label>
                        <input
                          type="text"
                          name={unitID}
                          data-id={index}
                          id={unitID}
                          className="unit"
                          onChange={this.props.handleChangeInputIng}
                          placeholder="Unité"
                        />
                    </span>
                    <span className="input-field-block">
                         <label className="edit-label" htmlFor={nameID}>{`Name-${index}`}</label>
                        <input
                          type="text"
                          name={nameID}
                          data-id={index}
                          id={nameID}
                          className="name"
                          placeholder="Ingrédient"
                          onChange={this.props.handleChangeInputIng}
                        />
                    </span>
                  <a href="" className="btn-text btn-text-remove" onClick={e=>this.props.handleRemoveInputIng(e, index)}>Remove ingredient</a>
                </div>
            </div>
        );
    }
}
            
export default InputIng;