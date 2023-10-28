import React from 'react';
import { useState } from 'react';

import Carousel from 'react-bootstrap/Carousel';
import SearchInput from './SearchInput';

const CarousalFood = ({ handleSearch }) => {
    const [search, setSearch] = useState("");
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    // Call handleSearch whenever the search input changes
    const handleSearchInput = (e) => {
        setSearch(e.target.value);
        handleSearch(e.target.value);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item style={{ maxHeight: "500px", objectFit: "contain !important" }}>
                <SearchInput search={search} handleSearchInput={handleSearchInput} />
                <img src='https://source.unsplash.com/random/900x700/?burger' className='d-block w-100' />
            </Carousel.Item>
            <Carousel.Item style={{ maxHeight: "500px", objectFit: "contain !important" }}>
                <SearchInput search={search} handleSearchInput={handleSearchInput} />
                <img src='https://source.unsplash.com/random/900x700/?pastry' className='d-block w-100' />
            </Carousel.Item>
            <Carousel.Item style={{ maxHeight: "500px", objectFit: "contain !important" }}>
                <SearchInput search={search} handleSearchInput={handleSearchInput} />
                <img src='https://source.unsplash.com/random/900x700/?pizza' className='d-block w-100' />
            </Carousel.Item>
        </Carousel>
    );
}

export default CarousalFood;
