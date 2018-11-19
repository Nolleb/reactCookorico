import React, { Component } from 'react';
import Header from './Header';
import Menu from './Menu';
import List from './List';
import Footer from './Footer';
import Panel from './Panel';
import PanelBackground from './PanelBackground';

import sampleReceipes from '../sample-receipes';
import menuItems from '../menu-items';
import '../CSS/App.css';
import base from '../base';

class App extends Component {
    
    state = {
        receipes: {},
        menuItems: {},
        card: {},
        primaryColor: "",
        isActive: "",
        isVisible: true,
        isClicked: false,
        addFormIsOpen: false,
        changeFormIsOpen: false,
        deleteFormIsOpen: false,
        modalIsOpen: false,
        stepInputs: [{ order: '' , step: ''}],
        ingInputs: [{quantity: '', unit: '', name: ''}]
    };

    componentWillReceiveProps(){
        this.setState({
            receipes: sampleReceipes
        });
    }
    componentDidMount(){
        const {params} = this.props.match;
        this.setState({
            menuItems: menuItems,
            primaryColor: "#8cd790",
            isActive: 'salade'
        });
      
        window.addEventListener('load', this.handleLoad);
       
        this.ref = base.syncState(`${params.pseudo}/receipes`, {
            context: this,
            state: "receipes"
        });
        
    };

    componentWillUnmount() {
        base.removeBinding(this.ref);
    };
    
    toggleModal = () => {
        this.setState({
          modalIsOpen: !this.state.modalIsOpen
        });
    }

    handleLoad = ()=> {
        const menuItems = document.querySelectorAll('.submenu__item');
        const menuItemsArray = Array.from(menuItems);
        menuItemsArray[0].classList.add('active');
        this.setState ({
            //receipes: sampleReceipes
        });
    }

    loadReceipes = () => {
		this.setState({receipes:sampleReceipes});
	};

    updatePrimaryColor = (color) => {
         //copy of the current state
        const primaryColor = color;
      
        //set that to state
        this.setState({primaryColor: primaryColor});
    }
    
    updateMenuItem = (cat) => {
        const category = cat;
        this.setState({isActive: category, isClicked:false});
    }
    
    displayCard = (key) => {
        const card = {...this.state.card};
        
        card[key] = key;
        this.setState({card: card, isVisible: false});
    }
    
    hideCard = (key) => {
        const card = {...this.state.card};
        delete card[key];
        this.setState({card: card, isVisible: true});
    }
    
    addToFavorite = (event, cardID) => {
        const receipes = {...this.state.receipes};
        (receipes[cardID].favorite === "inactive")?receipes[cardID].favorite = "active":receipes[cardID].favorite = "inactive";
        this.setState({receipes: receipes});
    }
    
    displayFavorites =(color)=>{

        const elems = document.querySelectorAll(".submenu__item ");
        [].forEach.call(elems, function(el) {
            el.classList.remove("active");
        });
        this.hideCard(this.state.card);
        this.setState({isClicked: true, primaryColor: color });        

    }
    
    toggleReceipeForm = (formName) => {
        if(formName === "addFormIsOpen"){
            (this.state.addFormIsOpen)?this.setState({addFormIsOpen: false }):this.setState({addFormIsOpen: true }); 
        }else if(formName === "changeFormIsOpen"){
            (this.state.changeFormIsOpen)?this.setState({changeFormIsOpen: false }):this.setState({changeFormIsOpen: true });
        }else{
            (this.state.deleteFormIsOpen)?this.setState({deleteFormIsOpen: false }):this.setState({deleteFormIsOpen: true });
        }
    }
    
    handleAddInputStep = (e) => {
        e.preventDefault();
        this.setState((prevState) => ({
            stepInputs: [...prevState.stepInputs, {order:"", step:""}],
        }));
    }
    
    handleChangeInputStep = (e) => {
      if (["order", "step"].includes(e.target.className) ) {
        let stepInputs = [...this.state.stepInputs];   
        stepInputs[e.target.dataset.id][e.target.className] = e.target.value;
      } else {
        this.setState({ [e.target.name]: e.target.value});
      }
    }
    
    handleRemoveInputStep =(e, id)=>{
        e.preventDefault();
         const stepInputs = [...this.state.stepInputs];
         //stepInputs[id]=null;
         stepInputs.splice(id, 1);
         this.setState({stepInputs: stepInputs});
    }
    
    handleAddInputIng = (e) => {
        e.preventDefault();
        this.setState((prevState) => ({
            ingInputs: [...prevState.ingInputs, {quantity:"", unit:"", name:""}],
        }));
    }
    
    handleChangeInputIng = (e) => {
      if (["quantity", "unit", "name"].includes(e.target.className) ) {
        let ingInputs = [...this.state.ingInputs];   
        ingInputs[e.target.dataset.id][e.target.className] = e.target.value;
      } else {
        this.setState({ [e.target.name]: e.target.value});
      }
    }
    
    handleRemoveInputIng =(e, id)=>{
        e.preventDefault();
         const ingInputs = [...this.state.ingInputs];
         
         ingInputs.splice(id, 1);
         this.setState({ingInputs: ingInputs});
    }
    
    addReceipe = (receipe) => {
        //1. take a copy from the existing state
        const receipes = { ...this.state.receipes };
        //2. Add our new fish to the fishes variable
        receipes[`receipes${Date.now()}`] = receipe;
        // 3. Set the new fishes object to state
        this.setState ({
            receipes: receipes
        });
    };

    updateReceipe =(key, updateReceipe) => {
        //copy of the current state
        const receipes = {...this.state.receipes};
        //update fish
        receipes[key]= updateReceipe;
        //set that to state
        this.setState({receipes: receipes});
    };
    
    deleteReceipe = (key) => {
        const receipes = {...this.state.receipes};
        receipes[key]=null;
        this.setState({receipes: receipes});
    };

    render() {
        return (
          <div className="wrapper">
            <Panel primaryColor={this.state.primaryColor}/>
            <div className="wrapper--home">
                <Header displayFavorites={this.displayFavorites} updatePrimaryColor={this.updatePrimaryColor} receipes={this.state.receipes} displayCard={this.displayCard} updateMenuItem={this.updateMenuItem} isActive={this.state.isActive} modalIsOpen={this.state.modalIsOpen} toggleModal={this.toggleModal} pseudo={this.props.match.params.pseudo}/>
            
                <Menu receipes={this.state.receipes} menuItems={this.state.menuItems} updatePrimaryColor={this.updatePrimaryColor} updateMenuItem={this.updateMenuItem} hideCard={this.hideCard} card={this.state.card}/>
            
                <List receipes={this.state.receipes} primaryColor={this.state.primaryColor} displayCard={this.displayCard} card={this.state.card} isActive={this.state.isActive} isVisible={this.state.isVisible} hideCard={this.hideCard} addToFavorite={this.addToFavorite} isClicked={this.state.isClicked} addFormIsOpen={this.state.addFormIsOpen} toggleReceipeForm={this.toggleReceipeForm} handleAddInputStep={this.handleAddInputStep} stepInputs={this.state.stepInputs} handleChangeInputStep={this.handleChangeInputStep} addReceipe={this.addReceipe} handleRemoveInputStep={this.handleRemoveInputStep} handleAddInputIng={this.handleAddInputIng} ingInputs={this.state.ingInputs} handleChangeInputIng={this.handleChangeInputIng} handleRemoveInputIng={this.handleRemoveInputIng} changeFormIsOpen={this.state.changeFormIsOpen} updateReceipe={this.updateReceipe} deleteReceipe={this.deleteReceipe} deleteFormIsOpen={this.state.deleteFormIsOpen} />
                <Footer loadReceipes={this.loadReceipes} receipes={this.state.receipes}/>
            </div>
            <PanelBackground menuItems={this.state.menuItems} isActive={this.state.isActive} isClicked={this.state.isClicked}/>
          </div>
        );
    }

}
 

export default App;
;