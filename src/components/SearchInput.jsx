import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import { Form } from 'react-bootstrap';


const SearchInput = ({ search, handleSearchInput }) => {


    return(
        <Carousel.Caption style={{ zIndex: "10" }}>

        <Form className="d-flex" >
            <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={search}
                onChange={(e)=>{handleSearchInput(e)}}
            />
            
        </Form>
    </Carousel.Caption>
    )
    
}
export default SearchInput;