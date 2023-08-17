import React, { useEffect, useState } from "react";
import { auth, provider } from "./Config";
import { signInWithPopup } from "firebase/auth";
import App from "../App";
import styles from './login.css';

function SignIn() {
  const [value, setValue] = useState('');

  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
    });
  };

  useEffect(() => {
    setValue(localStorage.getItem('email'));
  }, []);

  return (
    <div className="signin-container">
      {value ? <App /> :
        <div className="signin-content">
          <h2 className="signin-title">Sign in to Your Account</h2>
          <button className="signin-button" onClick={handleClick}>
            Sign in With Google
          </button>
        </div>
      }
    </div>
  );
}

export default SignIn;
