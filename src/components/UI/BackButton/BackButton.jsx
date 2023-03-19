import React from 'react';
import './BackButton.scss'
import arrow from '../../../../public/arrow_back_24px.svg'
import {useNavigate} from "react-router-dom";

const BackButton = ({className}) => {
    const navigate = useNavigate()
    return (
        <button onClick={() => navigate(-1)} className={'back-button ' + className}>
            <img className='back-button__img' src={arrow} alt="Back Arrow"/>
            <span>Go Back</span>
        </button>
    );
};

export default BackButton;