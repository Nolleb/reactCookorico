import React from 'react';
import Star from './Star';
import InputSearch from './InputSearch';
import IconLogo from './svg/IconLogo';
import IconKey from './svg/IconKey';
import IconLogout from './svg/IconLogout';
import ModalLauncher from './ModalLauncher';
import Login from './Login';
import firebase from 'firebase';
import base,{firebaseApp} from '../base';

class Header extends React.Component {
    state={
        uid: null,
        owner: null
    };

    componentDidMount(){
        firebase.auth().onAuthStateChanged(user=>{
            if(user){
                this.autHandler({user});
            }
        });
    }
    
    autHandler = async authData =>{
     const book = await base.fetch(this.props.pseudo, {context: this});
     console.log(book);//book vide :(
     if(!book.owner){
         await base.post(`${this.props.pseudo}/owner`, {
             data: authData.user.uid
         })
     }
     console.log(authData);
     this.setState({
         uid: authData.user.uid,
         owner: book.owner || authData.user.uid
     })
    }
    authenticate= provider =>{
        const authProvider = new firebase.auth[`${provider}AuthProvider`]();
        firebaseApp.auth().signInWithPopup(authProvider).then(this.autHandler);
    }
    logout = async()=> {
        await firebase.auth().signOut();
        this.setState({uid: null});
        //this.props.toggleModal();
    }
    render(){
        
        const isLoggedIn = this.state.uid;
        let button;

        if (isLoggedIn) {
          button = <div className="header__logo" onClick={this.logout}><div className="header__log-title">Log out</div><IconLogout className={"icon"}/></div>;
        } else {
          button = <div className="header__logo"><div className="header__log-title">Log in</div><IconKey className={"icon"}/></div>;
        }
        
        return(
            <header className="header">
                <div className="container header__inner">
                    <div className="logo">
                        <IconLogo width={'70px'} height={'70px'}/>
                    </div>
                    <div className="search-bar">
                        <InputSearch receipes={this.props.receipes} displayCard={this.props.displayCard} updatePrimaryColor={this.props.updatePrimaryColor} updateMenuItem={this.props.updateMenuItem} isActive={this.props.isActive}/>
                    </div>
                    
                    <div className="header__ctrl-btns">
                        <Star displayFavorites={this.props.displayFavorites} primaryColor={this.props.primaryColor}/>
                        <div className="header__login btn" >
                            <ModalLauncher buttonLabel={button} uid={this.state.uid}>
                               <Login authenticate={this.authenticate}/>
                            </ModalLauncher>
                        </div>
                    </div>
                </div>
     
            </header>
        );
    }
}

export default Header;