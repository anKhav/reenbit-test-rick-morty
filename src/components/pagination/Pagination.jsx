import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import './Pagination.scss'

const Pagination = ({filter}) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const page = +searchParams.get('page')
    const [currentPage, setCurrentPage] = useState( 1)

    const pages = useSelector(state => state.characters.data.info.pages)
    useEffect(() => {
        page === 0 ? setCurrentPage(1) : setCurrentPage(page)
    },[page])

    const goToPage = async (e) => {
        const pageNumber = +e.target.innerText
        filter === null ? setSearchParams(`page=${pageNumber}`) : setSearchParams(`page=${pageNumber}&name=${filter}`)
    }

    return (
        <div className='pagination'>
            {
                page > 1 && <button onClick={(e) => goToPage(e)} className='button'>{currentPage - 1}</button>
            }
            <button disabled={true} className='button button--current'>{currentPage}</button>
            {
                page < pages && <button onClick={(e) => goToPage(e)} className='button'>{currentPage + 1}</button>
            }
        </div>
    );
};

export default Pagination;