import React, {Fragment} from 'react';
import IconCross from './svg/IconCross';

class Modal extends React.Component {
        // if(!props.modalIsOpen){
        //    return null;
        // }
        // if(props.uid){
        //    return null; 
        // }
        constructor(props) {
            super(props);
        }
        

        render(){
            const {onClose, children} = this.props;
            return(
                <Fragment>
                    <div className="modal-filter" onClick={onClose}></div>
                    <div className="modal">
                        <div className="btn btn-modal" onClick={onClose}>
                            <IconCross className={"icon"}/>
                        </div>
                        <div className="modal__content">
                            {children}
                        </div>
                    </div>
                </Fragment>
            );
        }
}

export default Modal;