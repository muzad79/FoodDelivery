import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/signUp';
import Cart from './pages/Cart';
import Orders from './pages/Orders';

function App() {


  return (
    <>
    <BrowserRouter>
    <Navbar/>
    
      <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/login'} element={<Login/>}/>
        <Route path={'/signUp'} element={<SignUp/>}/>
        <Route path={'/orders'} element={<Orders/>}/>
      
      </Routes>

   
    <Footer/>
    </BrowserRouter>
       </>
  )
}

export default App
