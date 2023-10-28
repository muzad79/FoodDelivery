import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import CardFood from '../components/card';
import CarousalFood from '../components/carousal';
import axios from 'axios';



const Home = () => {
    const [foodItems, setFoodItems] = useState([]);
    const [foodCategory, setFoodCategory] = useState([]);
    const [search,setSearch]= useState("")

    useEffect(() => {
        axios.get("http://localhost:3000")
            .then((response) => {
                setFoodItems(response.data.foodData)
                setFoodCategory(response.data.foodCategory)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    function handleSearch(data){
        setSearch(data)
    }
    return (

        <>
            <CarousalFood handleSearch={handleSearch}/>
            <div className='container mt-5'>

                {foodCategory != [] ? foodCategory.map((data) => {
                    return (<div className='row'>
                        <div className='fs-3'>
                            {data.CategoryName}
                        </div>
                        <hr />



                        {foodItems != [] ? foodItems.filter((item) => (item.CategoryName == data.CategoryName) && (item.name.toLowerCase().includes(search.toLowerCase()))).map((foodItem) => {
                            return (
                                <div className='col-12 col-md-6 col-lg-3'>
                                    <CardFood foodItem={foodItem} />
                                </div>)

                        })




                            : <div>product not found</div>}
                    </div>



                    )
                })
                    : <div>invalid category</div>

                }

            </div >
        </>

    );
}


export default Home