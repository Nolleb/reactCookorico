import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAMtvy4d_-rcU2SiXEC4x-SF5jlcI7fErE",
    authDomain: "cookorico-rbg.firebaseapp.com",
    databaseURL: "https://cookorico-rbg.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

//nameed export
export {firebaseApp};

//default export
export default base;

