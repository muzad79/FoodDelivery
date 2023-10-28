import React, { useContext, useEffect, useRef, useState } from 'react'
import Card from 'react-bootstrap/Card';
import axios from 'axios'
import { CartContext } from '../../context/CartContext';

const CardFood = ({ foodItem }) => {
    const sizeRef = useRef(null)


    const { state, dispatch } = useContext(CartContext)


    const [qty, setQty] = useState(1);
    const [size, setSize] = useState("half");
    const [price, setPrice] = useState(0);


    let options = Object.keys(foodItem.options[0])
    let finalPrice = qty * foodItem.options[0][size]
    useEffect(() => {
        setSize(sizeRef.current.value)

    }, [])
    useEffect(() => {
        setPrice(finalPrice)
    }, [qty, size])
    
    const handleCart = async () => {

                 console.log("Caling handlecart function")

        let food = state.filter((item) => item.id == foodItem._id && item.size == size)
        if (food.length > 0) {
            
            await dispatch({ type: 'UPDATE', payload: { id: foodItem._id, price: finalPrice, qty: qty ,calledFrom:'handlecart'} })
            return
        }



        await dispatch({ type: "ADD", payload: { name: foodItem.name, qty: qty, size: size, price: price, id: foodItem._id } })




    }

    return (


        <div className='col'>
            <Card className='mt-3' style={{ width: '18rem', maxHeight: "430px" }}>
                <Card.Img variant="top" style={{ height: "150px" }} src={foodItem.img} />
                <Card.Body>
                    <Card.Title>{foodItem.name}</Card.Title>
                    <Card.Text>
                        {foodItem.description}
                    </Card.Text>
                    <div className='container w-100'>
                        <select className='m-2 h-100  bg-success rounded text-white' onChange={(e) => { setQty(Number(e.target.value)) }} >
                            {Array.from(Array(6), (e, i) => {
                                return <option key={i + 1} value={i + 1}>{i + 1}</option>
                            })}.

                        </select>
                        <select className='m-2 h-100  bg-success rounded text-white' ref={sizeRef} onChange={(e) => { setSize(e.target.value) }}>
                            {options.map((data) => {
                                return <option key={data} value={data}>{data} </option>
                            })}

                        </select>
                        <div className='d-inline fs-6'>
                            Rs {price}/-
                        </div>


                    </div>
                    <hr>
                    </hr>
                    <button onClick={handleCart} className='btn bg-success justify-center ms-2 text-white'>Add to cart</button>
                </Card.Body>
            </Card>
        </div>








    )
}

export default CardFood