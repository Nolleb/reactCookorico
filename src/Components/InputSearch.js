import React, {Fragment} from 'react';
import IconMask from './svg/IconMask';

class InputSearch extends React.Component {
    
    input = React.createRef();

    getReceipesIDS = () => {
        const receipesID = Object.keys(this.props.receipes);
        return receipesID;
    }
    getReceipeArray = () => {
        
        const receipes = Object.keys(this.props.receipes).map(key => this.props.receipes[key]);
        const receipesArray = receipes.map(el =>{
            if(!el){
                return null;
            }
            return  el.name + ' ' + el.subname; 
        });
        return receipesArray;
    }
    
    findMatches = (wordToMatch) => {
        const receipesArray = this.getReceipeArray();
        
        return receipesArray.filter(el =>{
            if(!el){
                return null;
            }
            const regex = new RegExp(wordToMatch, 'gi');
            return el.match(regex);
        });
    }
    
    getColor = (id) => {
        return Object.keys(this.props.receipes).map(key =>{
            if(key === id ){
                return this.props.receipes[key].color;
            }
        }).join('');
    }
    
    getCategory = (id) => {
        return Object.keys(this.props.receipes).map(key =>{
            if(key === id ){
                return this.props.receipes[key].category;
            }
        }).join('');
    }
    
    displayMatches = () => {
        const suggestions = document.querySelector('.suggestions');
        
        if(!this.input.current.value){
            suggestions.innerHTML = '';    
        }else{
            const matchArray = this.findMatches(this.input.current.value);
            const html = matchArray.map(el => {
                const regex = new RegExp(this.input.current.value, 'gi');
                const name = el.replace(regex, `<span class="suggestions__highlight">${this.input.current.value}</span>`);
                return `<li><span class="suggestions__name">${name}</span></li>`;
            }).join('');
        
            suggestions.innerHTML = html;
            
        }
    }
    
    arrayDiff = (a,b,el) => {
        return a.filter(function(i) {
                if (b.indexOf(i) >-1 ) {
                    el.push(a.indexOf(i));
                    return true;
                } else {
                    return false;
                }
        });
    }
    
    addCardFromInput= (event)=> {

        const matchArray = this.findMatches(this.input.current.value);
        const receipesArray = this.getReceipeArray();
        const suggestions = document.querySelector('.suggestions');
        const receipesIDS = this.getReceipesIDS();
        
        let diffIndexes = [];
        let diffValues = this.arrayDiff(receipesArray, matchArray, diffIndexes);

        if (event.target.classList.contains('suggestions__name')) {
            
            if(document.querySelector('.card__btn')){
                document.querySelector('.card__btn').click();
            }
            
            let position = 0;
            let currentNode = event.target.parentNode;
            let firstNode = currentNode.parentNode.firstChild;
            while(firstNode !== currentNode) {
                position++;
                currentNode = currentNode.previousSibling;
            }
           
            let cardID =receipesIDS[diffIndexes[position]];
            
            let color = this.getColor(cardID);
            let cat = this.getCategory(cardID);

            this.props.displayCard(cardID);
            suggestions.innerHTML = '';
            this.input.current.value="";
            this.props.updatePrimaryColor(color);
            this.props.updateMenuItem(cat);
            
            //get back active class on menu
            const elems = document.querySelectorAll(".submenu__item ");
            let elemsArr = Array.from(elems);
            elemsArr.map(el=>{
                el.classList.remove("active");
                let wording = el.children[0].textContent.toLowerCase();
                let wordNormalize= wording.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
                if(wordNormalize.includes(this.props.isActive)){
                    el.classList.add("active");
                }
            });
                
        }
    }
    componentDidMount () {
        document.querySelector('.suggestions').addEventListener("click", (event)=>this.addCardFromInput(event));
    }

    componentWillUnmount(){
        document.querySelector('.suggestions').removeEventListener("click", (event)=>this.addCardFromInput(event));
    }

    render(){
        return(
            <Fragment>
                <input type="text"  placeholder="Trouver une recette" className="search-bar__input" ref={this.input} onKeyUp={this.displayMatches} onChange={this.displayMatches}/>
                <ul className="suggestions">
                    
                </ul>
                <button type="submit" className="search-bar__btn">
                    <IconMask/>
                </button>
            </Fragment>
        );
    }
}

export default InputSearch;