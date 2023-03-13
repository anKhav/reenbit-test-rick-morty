import React from 'react';
import {useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import './Pagination.scss'

const Pagination = ({filter}) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const page = +searchParams.get('page')

    const pages = useSelector(state => state.characters.info.pages)

    const goToPage = async (e) => {
        const pageNumber = +e.target.innerText
        filter === null ? setSearchParams(`page=${pageNumber}`) : setSearchParams(`page=${pageNumber}&name=${filter}`)
    }

    return (
        <div className='pagination'>
            {
                page > 1 && <button onClick={(e) => goToPage(e)} className='button'>{page - 1}</button>
            }
            <button disabled={true} className='button button--current'>{page}</button>
            {
                page < pages && <button onClick={(e) => goToPage(e)} className='button'>{page + 1}</button>
            }
        </div>
    );
};

export default Pagination;