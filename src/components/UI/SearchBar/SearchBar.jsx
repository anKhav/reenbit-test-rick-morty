import React, {useEffect, useState} from 'react';
import SearchIcon from "../../../assets/images/searchIcon.jsx";
import './SearchBar.scss'
import {useSearchParams} from "react-router-dom";
import {LocalStorageService} from "../../../services/LocalStorageService.js";

const SearchBar = ({page}) => {
    const [searchParams, setSearchParams] = useSearchParams()
    const filterByName = searchParams.get('name')
    const [keyword, setKeyword] = useState( '')

    useEffect(() => {
        page && LocalStorageService.set('page', `page=${page}`)
        filterByName && setKeyword(filterByName)
    },[filterByName, page])

    const onChangeHandler = async (e) => {
        await setKeyword(e.target.value)
        if (e.target.value.length !==0) {
            await setSearchParams(`?page=1&name=${e.target.value}`)
            await LocalStorageService.set('filter', `name=${e.target.value}`)
        } else {
            await setSearchParams(`?page=1`)
            await LocalStorageService.remove('filter')
        }
    }

    return (
        <form className='search-bar' onSubmit={(e) => e.preventDefault()}>
            <SearchIcon className='search-bar__icon'/>
            <input value={keyword} onChange={(e) => onChangeHandler(e)} className='search-bar__input' type="text" />
        </form>
    );
};

export default SearchBar;