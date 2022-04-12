import React, {useState } from 'react'
import {Link, useHistory} from "react-router-dom";
import "./Login.css"
import { auth } from "./firebase";

function Login() {
    const history = useHistory()
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {e.preventDefault()

    // some fancy firebase login shitt.......
    auth
    .signInWithEmailAndPassword(email , password)
    .then(auth =>{
        history.push("/");
    })
    .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();
        
   auth
   .createUserWithEmailAndPassword(email,password)
   .then((auth) => {
       console.log(auth)
       if(auth){
           history.push('/')
       }
   })
    .catch(error => alert(error.message))
        // do some fancy firebase register shitt......
    }
    return (
        
    <div className="login">
        <Link to="/">

            <img className="login__logo" 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" />
      </Link>


      <div className="login__container">
          <h1>Sign-in</h1>
          <form action="">
              <h5>E-mail</h5>
              <input type="text" value={email} onChange={e=>setEmail(e.target.value)}/>

              <h5>Password</h5>
              <input type="password" value={password} onChange={e=>setPassword(e.target.value)}/>

              <button type="submit" onClick={signIn} className='login__signInButton'>Sign in</button>
          </form>
       <p>
           By singing-in you agree to Amazon Fake CLONE conditions of Use & Sale. please see our Privacy Notice , our Cookies Notice and our Interest-Based Ads
       </p>
       <button onClick={register} className='login__registerButton'> Create your 
       Amazon Account </button>
      </div>
    </div>

    )
}

export default Login
