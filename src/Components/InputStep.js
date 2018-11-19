import React from 'react';

class InputStep extends React.Component {
        
    render(){

        //const {order, step} = this.props.details;
        const index = this.props.index;
        let orderID= `order-${index}`;
        let descID = `step-${index}`;
          
        return(
            <div className="input-field input-field--step">    
                <div className={`input-field__inner input-field__inner--step input-field__inner--step-${index}`}>
                    <span className="input-field-block">
                         <label className="edit-label" htmlFor={orderID}>{`Order-${index}`}</label>
                        <input
                          type="text"
                          name={orderID}
                          data-id={index}
                          id={orderID}
                          className="order"
                          onChange={this.props.handleChangeInputStep}
                          placeholder="Step"
                        />
                    </span>
                    <span className="input-field-block">
                        <label className="edit-label" htmlFor={descID}>{`Desc-${index}`}</label>
                        <input
                          type="text"
                          name={descID}
                          data-id={index}
                          id={descID}
                          className="step"
                          placeholder="Description"
                          onChange={this.props.handleChangeInputStep}
                        />
                    </span>
                  <a href="" className="btn-text btn-text-remove" onClick={e=>this.props.handleRemoveInputStep(e, index)}>Remove step</a>
                </div>
            </div>
        );
    }
    
}

export default InputStep;