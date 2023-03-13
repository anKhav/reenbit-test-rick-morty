import React, {useEffect, useState} from 'react';
import SearchIcon from "../../../assets/images/searchIcon.jsx";
import './SearchBar.scss'
import {getCharacters} from "../../../features/CharactersSlice.js";
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {setFilterKeyword} from "../../../features/FilterSlice.js";

// onSubmit={() => dispatch(getCharacters(`https://rickandmortyapi.com/api/character/?page=1&name=${keyword}`))}
const SearchBar = () => {
    const filterKeyword = useSelector(state => state.filter.keyword)
    const [keyword, setKeyword] = useState('')
    const [searchParams, setSearchParams] = useSearchParams()
    const filterByName = searchParams.get('name')
    const dispatch = useDispatch()
    console.log(filterKeyword);

    useEffect(() => {

    },[filterByName])


    const onSubmitHandler = async (e) => {
        e.preventDefault()
        await dispatch(setFilterKeyword(keyword))
        filterKeyword.length !== 0 && await setSearchParams(`?page=1&name=${filterKeyword}`)
        dispatch(getCharacters(`https://rickandmortyapi.com/api/character/?page=1&name=${keyword}`))
    }

    const onChangeHandler = async (e) => {
        await setKeyword(e.target.value)
        e.target.value.length !==0 ?
            await setSearchParams(`?page=1&name=${e.target.value}`) :
            await setSearchParams(`?page=1`)
    }

    return (
        <form className='search-bar' onSubmit={(e) => onSubmitHandler(e)}>
            <SearchIcon className='search-bar__icon'/>
            <input value={keyword} onChange={(e) => onChangeHandler(e)} className='search-bar__input' type="text" />
        </form>
    );
};

export default SearchBar;