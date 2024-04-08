import { Button, TextField, Typography } from '@mui/material'
import React ,{useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [data,setData]=useState();
  const inputHandler =(e)=>{
      setData({...data,[e.target.name]:e.target.value})
          console.log(data);
  } 
  const navigate = useNavigate(); 

  const submit=()=>{
    axios.post("http://localhost:3001/Login",{
      Username:data.Username,
      Password:data.Password
    
    })


    .then((response)=>{
      console.log(response.data);
      alert("new entry created successfully");
    })
    .catch((error)=>{
      console.error(error);
      alert("error saving data");
    });

    navigate('/Home');
  };

  return (
    <div>
        <br/><br /><br /><br /><br />
        <Typography fontFamily='fantasy' variant='h3'  >Login</Typography>
        <br /><br />
        <TextField variant='outlined'  color='success' label="username" onChange={inputHandler} />
        <br /><br />
        <TextField variant='outlined' color='success' type='password' label="password" onChange={inputHandler} />
        <br /><br /><br />
        <Button variant='contained' color='inherit' onClick={submit}>Submit</Button>&nbsp;
       

    </div>
  )
}

export default Login
