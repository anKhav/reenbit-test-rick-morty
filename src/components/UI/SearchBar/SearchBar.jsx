import React from 'react';
import SearchIcon from "../../../assets/images/searchIcon.jsx";
import './SearchBar.scss'

const SearchBar = () => {
    return (
        <div className='search-bar'>
            <SearchIcon className='search-bar__icon'/>
            <input className='search-bar__input' type="text"/>
        </div>
    );
};

export default SearchBar;