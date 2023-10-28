import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Orders = () => {
    const [orders,setOrders] = useState([])
    useEffect(()=>{

        axios.post('http://localhost:3000/orders/get',{
            email:localStorage.getItem('email')
        })
        .then((response)=>{
            console.log(response)
            if(response.status == 200){
                setOrders(response.data.data)
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])
   
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
                    {orders?.orders?.map((order,index)=>{
                        return(
                            <>
                            <tr><th>{order.date}</th></tr>
                           { order.item.map((foodItem,index)=>{
                                return (
                                    <tr>
                                    <th scope='row'>{index+1}</th>
                                    <td>{foodItem.name}</td>
                                    <td>{foodItem.qty}</td>
                                    <td>{foodItem.size}</td>
                                    <td>{foodItem.price}</td>
                                
                                </tr>
                                )
                            })
                        }
                            </>
                           
                        )
                    })}
                </tbody>
            </table>
        

        </div>
    </div>
  )

}

export default Orders


