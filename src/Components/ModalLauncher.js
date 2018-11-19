import React,{Fragment} from 'react';
import Modal from './Modal';

class ModalLauncher extends React.Component{
    state = {
        showModal: false
    };

    handleToggleModal=()=> {
        this.setState({ showModal: !this.state.showModal });
    }
    
    render(){
        const { buttonLabel, children } = this.props;
        const { showModal } = this.state;
        
        if(this.props.uid){
            //this.setState({ showModal: !this.state.showModal });
        }

        return(
            <Fragment>
                <span
                    onClick={() => this.handleToggleModal()}
                >
                {buttonLabel}
                </span>

                {showModal && !this.props.uid &&
                <Modal onClose={() => this.handleToggleModal()}>
                    {children}
                </Modal>}
            </Fragment>
        );
    }
}


export default ModalLauncher;