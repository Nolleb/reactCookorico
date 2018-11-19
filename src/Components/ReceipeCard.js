import React from 'react';
import AddReceipeForm from './AddReceipeForm';
import ModifyReceipeForm from './ModifyReceipeForm';
import DeleteReceipeForm from './DeleteReceipeForm';
import IconHeart from './svg/IconHeart';
import IconCross from './svg/IconCross';
import IconAdd from './svg/IconAdd';
import IconEdit from './svg/IconEdit';
import IconDelete from './svg/IconDelete';

class ReceipeCard extends React.Component {
    
     renderCard = key => {
        const receipe = this.props.receipes[key];
        const card = this.props.card[key];
         
        const titleStyle = {
            color: receipe.color   
        };
        const backgroundStyle ={
            backgroundColor: receipe.color
        };
        const backgroundCard ={
            background: receipe.color,
            borderColor: receipe.color,
            opacity: .25,
            borderRadius: 2
        };
         
         
//        const logout = <div className="card__ctrl-inner card__ctrl-inner--log"><button className="btn btn-log-out" onClick={this.logout}>Log out</button></div>;
         
        const steps = receipe.steps.map((el, i)=>
            <div className="card__step" key={i}>
                <h3 className="card__step-title" style={backgroundStyle}>{el.order}</h3>
                <p className="card__desc">{el.step}</p>
            </div>
        );
        const ingredients = receipe.ingredients.map((el, j)=>
            <div key={j}>
                <p className="card__desc card__desc-ing">{el.quantity} {el.unit} {el.name}</p>
            </div>
        );
        
        if(this.props.isVisible){
            return null;
        }
//        if(!this.state.uid){
//             login = <Login authenticate={this.authenticate}/>
//        }else{
//            login = 
//                    {logout}
//                </div>
//        }
//        if(this.state.uid !== this.state.owner){
//        }
       
        
        //return <Login authenticate={this.authenticate}/>;  
        return (
            
            <div className="card" key={key}>
                <div className="card-inner">
                    <div className="card__infos">

                        <img className="card__img" src={receipe.image} alt={receipe.name}/>    
                        <div className="card__ingredients">
                            <button className={[this.props.receipes[key].favorite, "card__favorite", "card__icon", "btn"].join(' ')} onClick={(event)=>this.props.addToFavorite(event, this.props.card[key])}>
                             <IconHeart className={"icon icon-heart"}/>
                            </button>
                            <h3 className="heading-secondary u-margin-bottom-small u-margin-top-small card__ingredient-title" style={titleStyle}>Ingrédients</h3>
                            {ingredients}
                        </div>            
                    </div>
                    <div className="card__infos">
                        <div className="card__heading" style={titleStyle}>
                            <button className="btn card__btn" onClick={()=>this.props.hideCard(card)}>
                                <IconCross className={"icon icon-cross"}/>  
                            </button>
                            <div className="card__titles">
                                <h2 className="heading-primary" style={titleStyle}>{receipe.name}</h2>
                                <h3 className="heading-tertiary card__subtitle">{receipe.subname}</h3>
                            </div>
                            <div className="card__cooking">
                                <div className="u-pos-abs" style={backgroundCard}></div>
                                <p>Nombre de personnes: {receipe.portions}</p>
                                <p>Cuisson: {receipe.time.bake} min</p>
                                <p>Préparation: {receipe.time.prep} min</p>
                            </div>
                        </div>
                        <div className="card__steps">
                            {steps}
                        </div>
                    </div>
                </div>

                <AddReceipeForm addFormIsOpen={this.props.addFormIsOpen} toggleReceipeForm={this.props.toggleReceipeForm} handleAddInputStep={this.props.handleAddInputStep} stepInputs={this.props.stepInputs} handleChangeInputStep={this.props.handleChangeInputStep} addReceipe={this.props.addReceipe} handleRemoveInputStep={this.props.handleRemoveInputStep} handleAddInputIng={this.props.handleAddInputIng} ingInputs={this.props.ingInputs} handleChangeInputIng={this.props.handleChangeInputIng} handleRemoveInputIng={this.props.handleRemoveInputIng} />

                <ModifyReceipeForm
                    index={key}  
                    key={key}
                    changeFormIsOpen={this.props.changeFormIsOpen}
                    toggleReceipeForm={this.props.toggleReceipeForm}
                    details={this.props.receipes[card]}
                    stepInputs={this.props.stepInputs}
                    ingInputs={this.props.ingInputs}
                    updateReceipe={this.props.updateReceipe}
                    handleChangeInputStep={this.props.handleChangeInputStep}
                />
                
                <DeleteReceipeForm
                    toggleReceipeForm={this.props.toggleReceipeForm}
                    deleteReceipe={this.props.deleteReceipe}
                    deleteFormIsOpen={this.props.deleteFormIsOpen}
                    card = {this.props.card[key]}
                />
                <div className="card__ctrl u-margin-top-medium u-margin-bottom-small">
                    <div className="card__ctrl-inner">

                        <button className="card__icon" onClick={(e)=>this.props.toggleReceipeForm("addFormIsOpen")}>
                            <IconAdd className={"icon"}/>   
                        </button>
                        <button className="card__icon" onClick={(e)=>this.props.toggleReceipeForm("changeFormIsOpen")}>
                            <IconEdit className={"icon"}/>
                        </button>
                        <button className="card__icon" onClick={(e)=>this.props.toggleReceipeForm("deleteFormIsOpen")}>
                            <IconDelete className={"icon"}/>    
                        </button>
                      </div>  
                </div>
                
            </div>
        );
    }
    render(){
        
        const cardID = Object.keys(this.props.card);
        const receipes = this.props.receipes;
        
        if(!receipes[cardID]){
            return null;
        }
        return(
            <div className="u-margin-top-big">{cardID.map(this.renderCard)}</div>         
        );
    }
}

export default ReceipeCard;