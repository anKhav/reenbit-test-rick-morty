import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import './userInfo.scss'
import {logout} from "../../features/UserSlice.js";

const UserInfo = () => {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    useEffect(() => {
    },[user])
    const logoutHandler = () => {
        window.location.reload()
        dispatch(logout())
    }
    return (
        <div className='user-info'>
            <img className='user-info__img' src={user.picture} alt="User avatar"/>
            <span className='user-info__name'>{user.name}</span>
            <button className='logout' onClick={logoutHandler}>Logout</button>
        </div>
    );
};

export default UserInfo;