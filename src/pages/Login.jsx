import axios from "axios";
import React, { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link,useNavigate } from "react-router-dom";
import { TokenContext } from "../../context/tokenContext";

const Login = () => {
  const {handleToken}=useContext(TokenContext)
  const navigate =useNavigate()
  const [email,setEmail]= useState("");
  const [password,setPassword]= useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('email',email)
    axios.post(`${import.meta.env.VITE_API_BASE_URL}/login`,{
      email:email,
      password:password,

    })
    .then((response)=>{
      if(response.data.token){
      
      navigate("/")
      handleToken(response.data.token)
      }
      else{
        alert(response.data.message)
      }
    })
    .catch((error)=>{
      console.log(error)
    })

    setEmail("")
    setPassword("")
    // Submit the form data
  };

  return (
    <Form style={{marginTop:"150px"}} className="mx-auto h-100  w-25 " onSubmit={handleSubmit}>
      

      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control value={email} onChange={(e)=>{
          setEmail(e.target.value)
        }} type="email" placeholder="Enter your email" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control value={password} onChange={(e)=>{
          setPassword(e.target.value)
        }} type="password" placeholder="Enter your password" />
      </Form.Group>
      

      <Button type="submit" variant="success">
        Submit
      </Button>
      <Link className='btn btn-danger ms-3' to='/signUp'>New user</Link>
    </Form>
  );
};

export default Login;