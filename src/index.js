import React from 'react';
import ReactDOM from 'react-dom';
import { auth } from '../src/login/Config'; 
import App from './App';
import SignIn from '../src/login/Signin'; 

// Check if the user is authenticated or not
auth.onAuthStateChanged((user) => {
  ReactDOM.render(
    <React.StrictMode>
      {user ? <App /> : <SignIn />}
    </React.StrictMode>,
    document.getElementById('root')
  );
});




