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
<button style={normalButton} onClick={newUserlogin}>I'm New to Socio</button>
     <button style={normalButton}>I'm an existing user</button>
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
     <button style={loginNameBtn} variant='contained' className='fullWidth upMarginLgn' onClick={nextEmailAddress}>Next</button>
     </div>
    </React.StrictMode>
      );
    }
    function nextEmailAddress() {
      const userName = document.getElementById("socioUserName").value;
      if (userName === "") {
     alert("Invalid Username!");
      }else{
localStorage.setItem("sessionUserName", userName);
        document.title = "Socio | Login"
        root.render(
      <React.StrictMode>
       <div className='container'>
       <Typography style={brandText} id="brandMiddleText">Socio</Typography>
       <p style={normalText}>Welcome to Socio, {userName}</p>
       <TextField style={normalText} id="SocioEmailText" className="fullWidth" label="Your Email Address" type="email"></TextField>
       <button style={loginNameBtn} variant='contained' className='fullWidth upMarginLgn' onClick={nextPassword}>Next</button>
       </div>
      </React.StrictMode>
        );
  
      }
    }
    function nextPassword() {
      const userEmail = document.getElementById("SocioEmailText").value;
      if (userEmail === "") {
alert("Please enter a valid email address!");
} else {
localStorage.setItem("sessionUserEmail", userEmail);
document.title = "Socio | Login"
document.getElementById("SocioEmailText").value = "";
        root.render(
      <React.StrictMode>
       <div className='container'>
       <Typography style={brandText} id="brandMiddleText">Socio</Typography>
       <p style={normalText}>Dear User, please enter a strong password for your socio account</p>
<TextField id="SocioPassText" className="fullWidth" style={normalText} label="Your Password" type="password"></TextField>
       <button style={loginNameBtn} variant='contained' className='fullWidth upMarginLgn' onClick={nextDob}>Next</button>
       </div>
      </React.StrictMode>
        );
}
    }
function nextDob() {
  const userPassword = document.getElementById("SocioPassText").value;
  if (userPassword === "") {
alert("Invalid Username!");
}else if(userPassword.length < 10) {
  alert("A Socio password should have a minimum length of 10 for better security!");
}else if (userPassword === "Socio123") {
  alert("Socio123 is a restricted password!");
}else{
 localStorage.setItem("sessionUserPassword", userPassword);
document.getElementById("SocioPassText").value = "";
        root.render(
      <React.StrictMode>
       <div className='container'>
       <Typography style={brandText} id="brandMiddleText">Socio</Typography>
       <p style={normalText}>When were you born? Please notice that you must be of atleast <b>18 years</b> of age.</p>
      <TextField id="SocioBirthText" className="fullWidth" style={normalText} label="Date of Birth" type="date"></TextField>
       <button style={loginNameBtn} variant='contained' className='fullWidth upMarginLgn' onClick={nextProfession}>Next</button>
       </div>
      </React.StrictMode>
        );
}
}
function nextProfession() {
  const userDob = document.getElementById("SocioBirthText").value;
  const minAge = 18;
  const maxAge = 150;
  const today = new Date();
  givenDate = new Date(today);
        var birthDate = new Date(userDob);
        var years = (givenDate.getFullYear() - birthDate.getFullYear());

        if (givenDate.getMonth() < birthDate.getMonth() ||
     givenDate.getMonth() == birthDate.getMonth() && givenDate.getDate() < birthDate.getDate()) {
            years--;
        }

  if(String(userDob) === "") {
  alert("Please choose a valid date!");
}else if(years < minAge) {
  alert("You must be atleast of 18 years to use Socio!");
}else if(years > maxAge) {
  alert("You can't be greater than 150 years to use Socio!");
}else{
  localStorage.setItem("sessionUserDob", userDob);
  document.title = "Socio | Login";
  document.getElementById("SocioBirthText").value = "";
  root.render(
      <React.StrictMode>
       <div className='container'>
       <Typography style={brandText} id="brandMiddleText">Socio</Typography>
       <p style={normalText}>What is your profession?</p>
<TextField id="SocioProfText" className="fullWidth" style={normalText} label="Your Profession" type="text"></TextField>
       <button style={loginNameBtn} variant='contained' className='fullWidth upMarginLgn' onClick={nextProf}>Next</button>
       </div>
      </React.StrictMode>
        );
}
}
function nextProf() {
  const userProfession = document.getElementById("SocioProfText").value;
  if(userProfession == "") {
   alert("Invalid Profession");
}else{
  localStorage.setItem("sessionUserProfession", userProfession);
  document.getElementById("SocioProfText").value = "";
  root.render(
      <React.StrictMode>
       <div className='container'>
       <Typography style={brandText} id="brandMiddleText">Socio</Typography>
       <p style={normalText}>Where do you reside?</p>
<TextField id="SocioAddrCountryText" className="fullWidth" style={normalText} label="Your Country" type="text"></TextField>
<TextField id="SocioAddrStateText" className="fullWidth" style={normalText} label="Your State" type="text"></TextField>
<TextField id="SocioAddrCityText" className="fullWidth" style={normalText} label="Your City" type="text"></TextField>
       <button style={loginNameBtn} variant='contained' className='fullWidth upMarginLgn' onClick={socioCreateAccount}>Next</button>
       </div>
      </React.StrictMode>
        );
}
}
function createSocioAccount() {

}
