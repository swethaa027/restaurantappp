import React,{ useState } from 'react'
import { Button, TextField, Typography, } from '@mui/material'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

const Signup = () => {
    var[data,setData]=useState({});
    const inputHandler =(e)=>{
        setData({...data,[e.target.name]:e.target.value})
            console.log(data);

    } 
const navigate = useNavigate(); 



const submit=()=>{
      axios.post("http://localhost:3001/Signup",{
        Username:data.Username,
        Email:data.Email,
        Mobileno:data.Mobileno,
        Password:data.Password
        

      })

     

      .then(()=>{
        alert("new entry created successfully");
        navigate("/login")
      })
      .catch(()=>{
        alert("error saving data");
      
      });

      navigate('/Login');
    };
  return (
    <div>
        <br /><br /><br /><br /><br />
        <Typography fontFamily='fantasy' variant='h3'  >Signup</Typography>
        <br /><br />
        <TextField variant='outlined' color='success' label='Username' name='Username' onChange={inputHandler} />&nbsp;&nbsp;
        
        <TextField variant='outlined' color='success' label='Email' name='Email' onChange={inputHandler}/><br /><br />
        <TextField variant='outlined' color='success' label='Mobile no' name='Mobileno' onChange={inputHandler}/>&nbsp;&nbsp;
        
        
        <TextField variant='outlined' color='success' type='password' label='Password' name='Password' onChange={inputHandler}/>&nbsp;&nbsp;
        <br /><br />
        <Button variant='contained' color='inherit' onClick={submit}>Submit</Button>&nbsp;
       
    </div>
  )
//   }
}

export default Signup