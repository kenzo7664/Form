import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Title from '../layout/Title';



const UserDetails = ({ values, handleChange }) => {
  const styles = makeStyles((theme) => ({
    textField: {
      margin: '0 auto',
    },
  }));
  const classes = styles();
  const hide = ()=>{
    const tex = document.getElementById("email")
    const re = document.getElementById("label")
    if(re !== ""){
    tex.style.display = "inline-grid"
    }
  }

  const checkInputs = ()=>{
    const error = "You Have Empty Fields"
    if((values.firstName || values.lastname) === ""){
      return error
    }
  }

  return (
    <React.Fragment>
      <Title stepTitle='Enter your user details' />
      <br />
      
      <TextField
        className={classes.textField}
        label='Your First Name'
        onChange={handleChange('firstName')}
        defaultValue={values.firstName}
        onKeyPress={checkInputs}
      />
      <br />
      <TextField
        className={classes.textField}
        id="label"
        label='Your Last Name'
        onChange={handleChange('lastName')}
        defaultValue={values.lastName}
        onKeyPress={hide}
      />
      <br />
      <input 
        placeholder= " Email Address"
        id="email"
        defaultValue={values.email}
        style={{display:"none", padding:"10px", margin:"15px",borderColor:"rgb(0, 188, 212)"}}
        onChange={handleChange("email")}
      />
    </React.Fragment>
  );
};


export default UserDetails;
