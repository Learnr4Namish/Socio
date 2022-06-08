import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { purple } from '@mui/material/colors';
import ReactCSSTransitionGroup from 'react-transition-group'; 
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Button, Typography } from '@mui/material';
import { TextField } from '@mui/material';
import { color } from '@mui/system';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { brandText, normalText, normalButton, loginNameBtn } from './SocioStyles.js';
const root = ReactDOM.createRoot(document.getElementById("root"));

    if (localStorage.getItem("loginStatus") === "yes") {

    }else{

      document.body.style.display = "block";
      root.render(
      <React.StrictMode>
          <div className='container'>
    <Typography style={brandText} id="brandMiddleText">Socio</Typography>
    <p style={normalText} variant='p'>Socio helps you to connect with people all over the world. Socio can also be used for Educational and Entertainment purposes. Let's create your socio account if you are new to socio. Please chose the appropiate option for you:-</p>
     <br></br>
     <Button style={normalButton} onClick={newUserlogin}>I'm New to Socio</Button>
     <Button style={normalButton}>I'm an existing user</Button>
  </div>
        </React.StrictMode>
          );
          
    }
    function newUserlogin() {
      document.title = "Socio | Login"
      root.render(
    <React.StrictMode>
     <div className='container'>
     <Typography style={brandText} id="brandMiddleText">Socio</Typography>
     <TextField style={normalText} className="fullWidth" id='socioUserName' label="Your Name"></TextField>
     <Button style={loginNameBtn} variant='contained' className='fullWidth upMarginLgn' onClick={nextEmailAddress}>Next</Button>
     </div>
    </React.StrictMode>
      );
    }
    function nextEmailAddress() {
      const userName = document.getElementById("socioUserName").value;
      if (userName === "") {
     alert("Invalid Username!");
      }else{
        document.title = "Socio | Login"
        root.render(
      <React.StrictMode>
       <div className='container'>
       <Typography style={brandText} id="brandMiddleText">Socio</Typography>
       <p style={normalText}>Welcome to Socio, {userName}</p>
       <TextField style={normalText} id="SocioEmailText" className="fullWidth" label="Your Email Address" type="email"></TextField>
       <Button style={loginNameBtn} variant='contained' className='fullWidth upMarginLgn' onClick={nextPassword}>Next</Button>
       </div>
      </React.StrictMode>
        );
  
      }
    }
    function nextPassword() {
      const userEmail = document.getElementById("SocioEmailText");
      if (userEmail === "") {
alert("Please enter a valid email address!");
} else {
document.title = "Socio | Login"
        root.render(
      <React.StrictMode>
       <div className='container'>
       <Typography style={brandText} id="brandMiddleText">Socio</Typography>
       <p style={normalText}>Dear User, please enter a strong password for your socio account</p>
       <TextField style={normalText} id="SocioPassText" className="fullWidth" label="Your Password" type="password"></TextField>
       <Button style={loginNameBtn} variant='contained' className='fullWidth upMarginLgn'>Next</Button>
       </div>
      </React.StrictMode>
        );
}
    }
