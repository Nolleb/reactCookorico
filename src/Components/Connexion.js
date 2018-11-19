import React, {Fragment} from 'react';
import IconLogo from './svg/IconLogo';

class Connexion extends React.Component{
    myInput = React.createRef();
    goToHome = (event) => {
        //1. stop the form from submitting
        event.preventDefault();
        //2. get the text from that input
        const dataInput = this.myInput.current.value;
        //3. change the page to /home/whatever the have entered
        this.props.history.push(`/home/${dataInput}`);
    }
    render(){
        return(
            <Fragment>
                <div className="wrapper wrapper--connexion">
                <div className="grid-items">
                    <div className="item item-1"><img src="../images/creme-butternut-small.jpg" alt="crème butternut"/></div>
                    <div className="item item-2"><img src="../images/saucisses-lentilles-small.jpg" alt=""/></div>
                    <div className="item item-container-form">
                        <div className="item__inner">
                            <form  className="form-connexion" onSubmit={this.goToHome}>
                                <h2 className="heading-secondary">Please enter a pseudo</h2>
                                <input
                                className="edit-input"
                                type="text"
                                required
                                placeholder="Pseudo name"
                                ref={this.myInput}
                                />
                                <button className="btn btn-connexion">Enter &#8674;</button>
                            </form>
                        </div>
                    </div>
                    <div className="item item-4"><img src="../images/taboule-quinoa-small.jpg" alt=""/></div>
                    <div className="item item-container-title">
                        <div className="item__inner">
                            <h1 className="heading-primary heading-primary--connexion">Cookorico</h1>
                            <div className="logo">
                                <IconLogo width={'70px'} height={'70px'}/>
                            </div>
                        </div>
                    </div>
                    <div className="item item-6"><img src="../images/parmentier-canard-small.jpg" alt=""/></div>
                    <div className="item item-7"><img src="../images/brandade-small.jpg" alt=""/></div>
                    <div className="item item-8"><img src="../images/quiche-boite-small.jpg" alt=""/></div>
                </div>
                
                </div>
                
            </Fragment>
        );
    }
}

export default Connexion;