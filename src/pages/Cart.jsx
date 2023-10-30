import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import Delete from '@material-ui/icons/Delete'
import axios from 'axios'

const Cart = () => {
    const{state,dispatch} =useContext(CartContext)
    if(state.length === 0){
        return (
            <div className='m-5 w-100 text-center text-white fs-3'>Cart is Empty</div>
        )
    }
    let totalPrice =state.reduce((total,food)=>total+food.price,0)

    function handleCheckout(){
        axios.post(`${import.meta.env.VITE_API_BASE_URL}/orders`,{
            email:localStorage.getItem('email'),
            orders:state,
            date:new Date().toDateString()
        })
        .then((response)=>{
            if(response.status== 200){
                dispatch({type:"CHECKOUT"})
                alert(response.data.message)
            }

        })
        .catch((error)=>{
            console.log(error)
        })
       

    }
  return (
    <div>
        <div className='container m-auto mt-5 table-responsive-sm table-responsive-md bg-dark'>
            <table className='table table-hover table-dark'>
                <thead className=' text-success fs-4'>
                    <tr>
                        <th scope='col'>#</th>
                        <th scope='col'>Name</th>
                        <th scope='col'>Quantity</th>
                        <th scope='col'>Option</th>
                        <th scope='col'>Amount</th>
                        <th scope='col'></th>

                    </tr>

                </thead>
                <tbody>
                    {state.map((foodItem,index)=>{
                        return(
                            <tr>
                                <th scope='row'>{index+1}</th>
                                <td>{foodItem.name}</td>
                                <td>{foodItem.qty}</td>
                                <td>{foodItem.size}</td>
                                <td>{foodItem.price}</td>
                                <td><button type='button ' ><Delete className='btn p-0' onClick={()=>{dispatch({type:"DELETE",payload:foodItem.id})}} /></button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <div><h1 className='fs-2 text-white'>Total Price : Rs {totalPrice}/ -</h1></div>
            <div>
                <button className='btn bg-success mt-5' onClick={handleCheckout}>Check Out</button>
            </div>

        </div>
    </div>
  )
}

export default Cart