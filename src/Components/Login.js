import React from 'react';
import PropTypes from 'prop-types';

const Login = props => {
    return(
        <nav className="login">
            <p className="paragraph">Sign in to manage your recipes</p>
            <button className="btn btn-github" onClick={()=>props.authenticate('Github')}>Github</button>
            <button className="btn btn-facebook" onClick={()=>props.authenticate('Facebook')}>Facebook</button>
            <button className="btn btn-google" onClick={()=>props.authenticate('Google')}>Google</button>
        </nav>
    );
}

Login.prototype = {
    authenticate: PropTypes.func.isRequired
}

export default Login;

