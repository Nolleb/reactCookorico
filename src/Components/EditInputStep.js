import React from'react';

class EditInputStep extends React.Component {
    handleChange = event => {
     
        const updatedReceipe = {
            ...this.props.receipe,
            [event.currentTarget.name]: event.currentTarget.value
        }
 
        let updatedSteps  = {
            ...this.props.details,
            [event.currentTarget.name]: event.currentTarget.value
        };

        updatedReceipe.steps.map((el, key)=>{
                if(this.props.index==key){
                    el.step = updatedSteps.step;
                    el.order = updatedSteps.order;   
                }
            }
        );
        
        this.props.updateReceipe(this.props.index, updatedReceipe);
        
    };
    render(){
       
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
                          name="order"
                          data-id={index}
                          id={orderID}
                          className="order"
                          onChange={this.handleChange}
                          placeholder="Step"
                          value={this.props.details.order}
                          autoComplete={orderID}
                        />
                    </span>
                    <span className="input-field-block">
                        <label className="edit-label" htmlFor={descID}>{`Desc-${index}`}</label>
                        <input
                          type="text"
                          name="step"
                          data-id={index}
                          id={descID}
                          autoComplete={descID}
                          className="step"
                          placeholder="Description"
                          onChange={this.handleChange}
                          value={this.props.details.step}
                        />
                    </span>
                </div>
            </div>
        );
    }
    
}

export default EditInputStep;