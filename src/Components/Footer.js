import React, {Fragment} from 'react';


class Footer extends React.Component {
    render(){
        const receipes = this.props.receipes;
        let button;
        if(Object.keys(receipes).length === 0){
            button =  <button className="btn btn-footer" onClick={this.props.loadReceipes}>Load recipes</button>;
        }else{
            button = "";
        }
        return(
            <Fragment>
                {button}
                <div className="footer">
                    <ul className="footer__list">
                        <li className="footer__item"><a className="btn-text footer__link" href="https://www.cuisineaz.com/" target="_blank" rel="noopener noreferrer">Cuisineaz</a></li>
                        <li className="footer__item"><a className="btn-text footer__link" href="https://www.marmiton.org/" target="_blank" rel="noopener noreferrer">Marmiton</a></li>
                        <li className="footer__item"><a className="btn-text footer__link" href="https://www.750g.com/" target="_blank" rel="noopener noreferrer">750g</a></li>
                    </ul>
                    <ul className="footer__list">
                        <li className="footer__item"><a className="btn-text footer__link" href="https://www.atelierdeschefs.fr/" target="_blank" rel="noopener noreferrer">Atelier des chefs</a></li>
                        <li className="footer__item"><a className="btn-text footer__link" href="https://www.cookomix.com/" target="_blank" rel="noopener noreferrer">Cookomix</a></li>
                        <li className="footer__item"><a className="btn-text footer__link" href="https://www.ptitchef.com/" target="_blank" rel="noopener noreferrer">Ptitchef</a></li>
                    </ul>
                    <ul className="footer__list">
                        <li className="footer__item"><a className="btn-text footer__link" href="http://www.fashioncooking.fr/" target="_blank" rel="noopener noreferrer">Fashion cooking</a></li>
                        <li className="footer__item"><a className="btn-text footer__link" href="https://www.academiedugout.fr/" target="_blank" rel="noopener noreferrer">Académie du goût</a></li>
                        <li className="footer__item"><a className="btn-text footer__link" href="https://www.cuisineactuelle.fr/" target="_blank" rel="noopener noreferrer">Cuisine actuelle</a></li>
                    </ul>
                    
                </div>
            </Fragment>
        );
    }
}

export default Footer;