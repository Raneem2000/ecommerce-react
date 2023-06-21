import React, { useState } from "react";
import './LoginForm.css';
import Google from './icons/Google.png';
import Facebook from './icons/Facebook.png';

function LoginForm() {
  const [isLoginView, setIsLoginView] = useState(true);

  const handleToggleView = () => {
    setIsLoginView((prev) => !prev);
  };

  return ( 
    <div className="all">
    <div className="form-container">
      <h2>{isLoginView ? "Login" : "Register"}</h2>
      <form>
        <label>
          
          <input type="email" placeholder="email"/>
        </label>
        <label>
          <input type="password" placeholder="password" />
        </label>
        {!isLoginView && (
          <label>
            <input type="password" placeholder="confirm password"/>
          </label>
        )}
        <button type="submit">{isLoginView ? "Login" : "Register"}</button>
      </form>
      <button  className="switch" onClick={handleToggleView}>
        <b>{isLoginView ? "Register" : "Login"}</b>
      </button>
      <div className="alt-login">
                <div className="facebook"><img src= {Google} /></div>
                <div className="google"><img src={Facebook} /></div>
    </div></div></div>
  );
}

export default LoginForm;
