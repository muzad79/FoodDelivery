import axios from "axios";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [name,setName]= useState("");
  const [email,setEmail]= useState("");
  const [password,setPassword]= useState("");
  const [location,setLocation]= useState("");
  
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:3000/user",{
      name:name,
      email:email,
      password:password,
      location:location

    })
    .then((response)=>{
      alert(response.data.message)
    })
    .catch((error)=>{
      console.log(error)
    })

    setName("");
    setEmail("")
    setPassword("")
    setLocation("")
    // Submit the form data
  };

  return (
    <Form style={{marginTop:"150px"}} className="mx-auto h-100  w-25 " onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control value={name} onChange={(e)=>{
          setName(e.target.value)
        }} type="text" placeholder="Enter your name" />
      </Form.Group>

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
      <Form.Group className="mb-3">
        <Form.Label>Location</Form.Label>
        <Form.Control value={location} onChange={(e)=>{
          setLocation(e.target.value)
        }} type="text" placeholder="Enter your location" />
      </Form.Group>

      <Button type="submit" variant="success">
        Submit
      </Button>
      <Link className='btn btn-danger ms-3' to='/login'>Already a user</Link>
    </Form>
  );
};

export default SignUp;