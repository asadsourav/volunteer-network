import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import logo from '../../logos/Group 1329.png'
import googleIcon from '../../logos/google.png'
import { Link, useHistory, useLocation } from 'react-router-dom';
import firebaseConfig from './firebase.config';
import * as firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from '../../App';
const Login = () => {

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

   
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);

    }

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const handleGoogleSignIn = () => {

        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            
            var token = result.credential.accessToken;
            
            const { displayName, email } = result.user;
            const signedInUser = { name: displayName, email: email }
            setLoggedInUser(signedInUser);
            
            history.replace(from);
            console.log(signedInUser)
            // ...
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
    }
    return (
        <div>
            <img style={{margin:'0 auto',display: 'block'}} className = 'w-25 ' src={logo} alt=""/>
            <div style={{width:'570px',height:'457px',border:'2px solid #ABABAB'}} className=" container rounded text-center my-5">
                <h3 className="my-5">Login With</h3>
            <Button onClick={handleGoogleSignIn} variant="outline-secondary" className = "rounded-pill" > <img style={{width:'10%'}}  src= {googleIcon} alt=""/> Continue with Google</Button>
            <h5 className='mt-4'>Don't have any account? <Link to = "">Create Account</Link></h5>
            </div>

        </div>
    );
};

export default Login;