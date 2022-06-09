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
       <TextField style={normalText} id="SocioPassText" className="fullWidth" label="Your Password" type="password"></TextField>
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
}else if(userPassword.length < 8) {
  alert("A Socio password should have a minimum length of 8!");
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
       <p style={normalText}>Choose your DOB month:</p>
<select name="months" id="dobMonths" onChange={changeDobDays} className="selectPicker">
  <option value="january">January</option>
  <option value="february">February</option>
  <option value="march">March</option>
  <option value="april">April</option>
  <option value="may">May</option>
  <option value="june">June</option>
  <option value="july">July</option>
  <option value="august">August</option>
  <option value="september">September</option>
<option value="october">October</option>
<option value="november">November</option>
<option value="december">December</option>
</select>
       <p style={normalText}>Choose your DOB day:</p>
<select name="days" id="dobDays" className="selectPicker">
  <option value={1}>1</option>
  <option value={2}>2</option>
  <option value={3}>3</option>
  <option value={4}>4</option>
  <option value={5}>5</option>
  <option value={6}>6</option>
  <option value={7}>7</option>
  <option value={8}>8</option>
  <option value={9}>9</option>
  <option value={10}>10</option>
  <option value={11}>11</option>
  <option value={12}>12</option>
  <option value={13}>13</option>
  <option value={14}>14</option>
  <option value={15}>15</option>
  <option value={16}>16</option>
  <option value={17}>17</option>
  <option value={18}>18</option>
  <option value={19}>19</option>
  <option value={20}>20</option>
  <option value={21}>21</option>
  <option value={22}>22</option>
  <option value={23}>23</option>
  <option value={24}>24</option>
  <option value={25}>25</option>
  <option value={26}>26</option>
  <option value={27}>27</option>
  <option value={28}>28</option>
  <option value={29}>29</option>
  <option value={30}>30</option>
  <option value={31}>31</option>
</select>
<p style={normalText}>Choose your DOB year:</p>
<select name="years" id="dobYears" className="selectPicker"></select>
       <button style={loginNameBtn} variant='contained' className='fullWidth upMarginLgn' onClick={nextDob}>Next</button>
       </div>
      </React.StrictMode>
        );
const renderDobYears = document.getElementById("dobYears");
const thisYearGet = new Date().getFullYear();
const hundredYearsBack= Number(thisYearGet) - 100;
console.log(hundredYearsBack);
for (let i = Number(hundredYearsBack); i <= Number(thisYearGet); i++) {
 renderDobYears.innerHTML += "<option value='" + i + "'>" + i + "</option>";
}
}
}
function changeDobDays() {
  const targetSelectorMonth = document.getElementById("dobMonths");
  const targetSelectorDay = document.getElementById("dobDays");
 if(targetSelectorMonth.selectedIndex === 2) {
  targetSelectorDay.remove(30);
}
}
