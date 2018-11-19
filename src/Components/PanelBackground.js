import React from 'react';

class PanelBackground extends React.Component {
    
    render(){
        let backgroundImage ={};
        const menuItems = Object.keys(this.props.menuItems).map(key => this.props.menuItems[key]);

        if(this.props.isClicked){
            backgroundImage ={
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",                
                backgroundImage: "url(/images/favorite.jpg)"  
            };            
        }else{
            menuItems.map(el=>{
                if(el.category === this.props.isActive){
                    backgroundImage ={
                                        backgroundSize: "cover",
                                        backgroundRepeat: "no-repeat",
                                        backgroundPosition: "center",                
                                        backgroundImage: "url("+el.image+")"  
                                    };              
                }                                    
            });
        }


        return(
            <div className="panel-background" style={backgroundImage}></div>
        );
    }
}

export default PanelBackground;