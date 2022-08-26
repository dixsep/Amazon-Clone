import React from 'react';
import './Login.css';
import {Link, useHistory} from "react-router-dom";
import {useState} from 'react';
import {auth} from './firebase';
function Login() {
    const history = useHistory();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const signIn =(e)=>{
        e.preventDefault();

        //some firebase ..
        auth
            .signInWithEmailAndPassword(email,password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const register =(e)=>{
        e.preventDefault();
        
        //Some fancy firebase register
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth)=>{
                //Succesful Authentication
                
                if (auth){
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))

    }

    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className="login__logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
                />
            </Link>
            <div className='login__container'>
                <h1>Sign-In</h1>
                <form>
                    <h5>E-Mail</h5>
                    <input type='email' value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>
                    <button className='login__signin' type='submit' onClick={signIn}>Sign-In</button>
                </form>
                <p>By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>
                    <h6>New to Amazon?</h6>
                <button className='login__register' onClick={register}>Create Your Amazon account</button>
            </div>
        </div>
    )
}

export default Login
