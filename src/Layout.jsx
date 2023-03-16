import React from 'react';
import {Outlet, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setUser} from "./features/UserSlice.js";
import {LocalStorageService} from "./services/LocalStorageService.js";

const Layout = () => {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logOutHandler = (e) => {
        e.preventDefault()
        dispatch(setUser(null))
        LocalStorageService.remove('user')
        // navigate('/auth')
    }

    return (
        <>
            <button onClick={ e => logOutHandler(e)} >Sign out</button>
            <Outlet/>
        </>
    );
};

export default Layout;