import React from 'react';

class EditInputIng extends React.Component{
    handleChange = event => {
        const updatedReceipe = {
            ...this.props.receipe,
            [event.currentTarget.name]: event.currentTarget.value
        }
 
        let updatedIngs  = {
            ...this.props.details,
            [event.currentTarget.name]: event.currentTarget.value
        };
        console.log(updatedIngs.name);

        updatedReceipe.ingredients.map((el, key)=>{
                console.log(el);
                if(this.props.index==key){
                    el.quantity = updatedIngs.quantity;
                    el.unit = updatedIngs.unit;
                    el.name = updatedIngs.name;
                }
            }
        );
        
        this.props.updateReceipe(this.props.index, updatedReceipe);
    }
    
    render(){
       
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
                        name= "quantity"
                        data-id={index}
                        id={quantityID}
                        className="quantity"
                        onChange={this.handleChange}
                        autoComplete={quantityID}
                        placeholder="Quantité"
                        value={this.props.details.quantity}
                        />
                    </span>
                    <span className="input-field-block">
                        <label className="edit-label" htmlFor={unitID}>{`Unit-${index}`}</label>
                        <input
                        type="text"
                        name="unit"
                        data-id={index}
                        id={unitID}
                        className="unit"
                        onChange={this.handleChange}
                        autoComplete={unitID}
                        placeholder="Unité"
                        value={this.props.details.unit}
                        />
                    </span>
                    <span className="input-field-block">
                        <label className="edit-label" htmlFor={nameID}>{`Name-${index}`}</label>
                        <input
                        type="text"
                        name="name"
                        data-id={index}
                        id={nameID}
                        className="name"
                        autoComplete={nameID}
                        placeholder="Ingrédient"
                        onChange={this.handleChange}
                        value={this.props.details.name}
                        />
                    </span>
                </div>
            </div>
        );
    }
}

export default EditInputIng ;