import React, {Fragment} from 'react';
import InputStep from './InputStep';
import InputIng from './InputIng';
import IconCross from './svg/IconCross';

class AddReceipeForm extends React.Component {

    nameRef = React.createRef();
    categoryRef = React.createRef();
    colorRef = React.createRef();
    favoriteRef = React.createRef();
    subnameRef = React.createRef();
    imageRef = React.createRef();
    prepRef = React.createRef();
    portionsRef = React.createRef();
    bakeRef = React.createRef();

    createReceipe = (event) => {
        event.preventDefault();
        
        const receipe = {
            name : this.nameRef.current.value,
            subname: this.subnameRef.current.value,
            image : this.imageRef.current.value,
            category: this.categoryRef.current.value,
            color: this.colorRef.current.value,
            favorite: this.favoriteRef.current.value,
            portions: this.portionsRef.current.value, 
            time:{
                bake: this.bakeRef.current.value,
                prep: this.prepRef.current.value
            },
            ingredients: this.props.ingInputs,
            steps: this.props.stepInputs
        }
        this.props.addReceipe(receipe);
        //reset the form 
        event.currentTarget.reset();
    }
    
   
    render(){
        
        if(!this.props.addFormIsOpen){
            return null;
        }
        return(
            <Fragment>
                <div className="form-container">
                    <button className="btn card__btn" onClick={(e)=>this.props.toggleReceipeForm("addFormIsOpen")}>
                        <IconCross className={"icon icon-cross"}/>
                    </button>
                    <div className="form-container__inner">
                        <h2 className="heading-secondary">Add receipe</h2>
                        <form className="form" onSubmit={this.createReceipe}>
                            <div className="input-field">    
                                <div className="input-field__inner">
                                    <input className="edit-input" type="text" name="name" placeholder="Name" ref={this.nameRef}/>
                                    <input className="edit-input" type="text" name="subname" placeholder="Subname" ref={this.subnameRef}/>
                                    <input className="edit-input" type="text" name="image" placeholder="Image" ref={this.imageRef}/>
                                </div>
                            </div>
                            <div className="input-field">    
                                <div className="input-field__inner">
                                    <input className="edit-input" type="text" name="portions" placeholder="Nombre de personnes" ref={this.portionsRef}/>
                                    <input className="edit-input" type="text" name="bake" placeholder="Temps de cuisson" ref={this.bakeRef}/>
                                    <input className="edit-input" type="text" name="prep" placeholder="Temps de préparation" ref={this.prepRef}/>
                                </div>
                            </div>
                             <div className="input-field">    
                                <div className="input-field__inner">
                                    <input className="edit-input" type="text" name="category" placeholder="Category" ref={this.categoryRef}/>
                                     <select name="favorite" className="edit-select" ref={this.favoriteRef}>
                                        <option value="active">
                                            active
                                        </option>
                                        <option value="inactive">
                                            inactive
                                        </option>
                                    </select>
                                    <input className="edit-input" type="text" name="color" placeholder="Color" ref={this.colorRef}/>
                                </div>
                            </div>
                            <h3 className="heading-tertiary u-margin-top-medium u-margin-bottom-small">Ingrédients</h3>
                            <a href="" className="btn-text btn-text--add" onClick={e=>this.props.handleAddInputIng(e)}>Add another ingredient</a>
                            {Object.keys(this.props.ingInputs).map(key => <InputIng
                                handleChangeInputIng={this.props.handleChangeInputIng}
                                key={key}
                                index={key}
                                details={this.props.ingInputs[key]}
                                handleRemoveInputIng={this.props.handleRemoveInputIng}
                               />
                            )}
                            <h3 className="heading-tertiary u-margin-top-medium u-margin-bottom-small">Steps</h3>
                            <a href="" className="btn-text btn-text--add" onClick={e=>this.props.handleAddInputStep(e)}>Add another step</a>
                            {Object.keys(this.props.stepInputs).map(key => <InputStep
                                handleChangeInputStep={this.props.handleChangeInputStep}
                                key={key}
                                index={key}
                                details={this.props.stepInputs[key]}
                                handleRemoveInputStep={this.props.handleRemoveInputStep}
                               />
                            )}
                            
                            <button className="btn btn-submit u-margin-top-medium" type="submit">Add receipe</button>
                        </form>
                    </div>
                </div>
                <div className="form__filter"></div>
            </Fragment>
        );
    }
    
}

export default AddReceipeForm;