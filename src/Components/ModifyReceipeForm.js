import React,{Fragment} from 'react';
import EditInputStep from './EditInputStep';
import EditInputIng from './EditInputIng';
import IconCross from './svg/IconCross';

class ModifyReceipeForm extends React.Component{
    handleChange = event => {
        
        const updatedReceipe = {
            ...this.props.details,
            [event.currentTarget.name]: event.currentTarget.value
        };
        let timeItems = {...updatedReceipe.time,
            [event.currentTarget.name]: event.currentTarget.value
        };
        updatedReceipe.time = timeItems;
        this.props.updateReceipe(this.props.index, updatedReceipe);
        
    };
    render(){
   
        if(!this.props.changeFormIsOpen){
            return null;
        }
        return(
            <Fragment>
                <div className="form-container form-container--change">
                    <button className="btn card__btn" onClick={(e)=>this.props.toggleReceipeForm("changeFormIsOpen")}>
                        <IconCross className={"icon icon-cross"}/>
                    </button>
                    <div className="form-container__inner form-container__inner--change">
                        <h2 className="heading-secondary">Modify receipe</h2>
                        <form className="form">
                            <div className="input-field">    
                                <div className="input-field__inner">
                                    <input className="edit-input" type="text" name="name" onChange={this.handleChange} value={this.props.details.name}/>
                                    <input className="edit-input" type="text" name="subname" onChange={this.handleChange} value={this.props.details.subname}/>
                                    <input className="edit-input" type="text" name="image" onChange={this.handleChange} value={this.props.details.image}/>
                                </div>
                            </div>
                            <div className="input-field">    
                                <div className="input-field__inner">
                                    <input className="edit-input" type="text" name="portions" onChange={this.handleChange} value={this.props.details.portions}/>
                                    <input className="edit-input" type="text" name="bake" onChange={this.handleChange} value={this.props.details.time.bake}/>
                                    <input className="edit-input" type="text" name="prep" onChange={this.handleChange} value={this.props.details.time.prep}/>
                                </div>
                            </div>
                    
                            <h3 className="heading-tertiary u-margin-top-medium u-margin-bottom-small">Ingrédients</h3>
                            {Object.keys(this.props.details.ingredients).map(key=><EditInputIng
                                                                    key={key}
                                                                    index={key}
                                                                    details={this.props.details.ingredients[key]}
                                                                    receipe={this.props.details}
                                                                    updateReceipe={this.props.updateReceipe}
                                                                    />)}
                            <h3 className="heading-tertiary u-margin-top-medium u-margin-bottom-small">Steps</h3>
                            {Object.keys(this.props.details.steps).map(key=><EditInputStep
                                                                        key={key}
                                                                        index={key}
                                                                        details={this.props.details.steps[key]}
                                                                        receipe={this.props.details}
                                                                        updateReceipe={this.props.updateReceipe}
                                                                    />)}
                            
                            
                            <button className="btn btn-submit btn-submit--change u-margin-top-medium" onClick={(e)=>this.props.toggleReceipeForm("changeFormIsOpen")}>Modify receipe</button>
                        </form>
                    </div>
                </div>
                <div className="form__filter form__filter--change"></div>
            </Fragment>
        );
    }
}

export default ModifyReceipeForm;