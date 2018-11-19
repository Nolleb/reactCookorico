import React, {Fragment} from 'react';
import IconCross from './svg/IconCross';

class DeleteReceipeForm extends React.Component{
    render(){
        
        if(!this.props.deleteFormIsOpen){
            return null;
        }
        
        return(
             <Fragment>
                <div className="form-container form-container--supp">
                    <button className="btn card__btn" onClick={(e)=>this.props.toggleReceipeForm("deleteFormIsOpen")}>
                        <IconCross className={"icon icon-cross"}/>
                    </button>
                    <div className="form-container__inner form-container__inner--supp">
                        <h2 className="heading-secondary">Are you sure to delete receipe ?</h2>
                        <div className="form-container__content">
                            <button className="btn btn-supp" onClick={()=>this.props.deleteReceipe(this.props.card)}>YES</button>
                            <button className="btn btn-supp" onClick={(e)=>this.props.toggleReceipeForm("deleteFormIsOpen")}>NO</button>
                        </div>
                    </div>
                </div>
                <div className="form__filter form__filter--supp"></div>
            </Fragment>
        );
    }
}

export default DeleteReceipeForm;