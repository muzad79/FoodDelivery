import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link} from 'react-router-dom';
import { useState } from 'react';
import { TokenContext } from '../../context/tokenContext';
import { Badge } from 'react-bootstrap';
import { CartContext } from '../../context/CartContext';
import Modal from '../Modal';
import Cart from '../pages/Cart';


const NavBar = () => {
  const {token,handleToken} = useContext(TokenContext)
  const{state} =useContext(CartContext)
  const[cartView,setCartView] =useState(false);
  
  return (
  


    <>
      <Navbar bg="success" data-bs-theme="dark" >
        <Container  >
          <Navbar.Brand className='fs-2' href="#home">KashmirFoodHub</Navbar.Brand>
          <Nav className="me-auto  " >
            <div className='d-flex me-auto'>
            <Nav.Link><Link  className='fs-5 me-auto ' to={'/'} style={{textDecoration:"none" ,color:"white"}} >Home</Link></Nav.Link>
            {
              token.length>0? <Nav.Link><Link  className=' me-auto fs-5 ' to={'/orders'} style={{textDecoration:"none" ,color:"white"}} >MyOrders</Link></Nav.Link>:
              ""
            }
            </div>
            <div className=' d-flex' style={{marginLeft:"750px"}}>
              {token.length>0?<>
                <Nav.Link><button  onClick={()=>{
                  setCartView(true)
                }} className=' btn bg-white text-success d-flex' style={{textDecoration:"none" ,color:"white"}}>MyCart
                <Badge pill bg='danger mx-1'>{state.length}</Badge>
                </button></Nav.Link>
            <Nav.Link> <Link onClick={()=>{handleToken("")}} className=' mx-2 btn bg-white text-danger 'to={'/signUp'} style={{textDecoration:"none" ,color:"white"}}>Logout</Link></Nav.Link>
              {cartView?<Modal onClose={()=>{setCartView(false)}}><Cart/></Modal>:""}
              </>:<>
              <Nav.Link><Link className=' btn bg-white text-success'to={'/login'} style={{textDecoration:"none" ,color:"white"}}>Login</Link></Nav.Link>
            <Nav.Link><Link className=' ms- btn bg-white text-success'to={'/signUp'} style={{textDecoration:"none" ,color:"white"}}>SignUp</Link></Nav.Link>
              </>}
           
            </div>
          </Nav>
        </Container>
      </Navbar>
    
    </>
  );
}



export default NavBar