import React, {useEffect} from 'react';
import {Route, Routes, useLocation, useNavigate, useParams} from "react-router-dom";
import Layout from "../Layout.jsx";
import Characters from "../pages/Characters/Characters.jsx";
import Character from "../pages/Character/Character.jsx";
import {useSelector} from "react-redux";
import {LocalStorageService} from "../services/LocalStorageService.js";

const PrivateRoutes = () => {
    const user = useSelector(state => state.user)
    const navigate = useNavigate()
    const {pathname} = useLocation()

    useEffect(() => {
        const storedFilter = localStorage.getItem("filter")
        const storedPage = localStorage.getItem("page")
        LocalStorageService.set('user', JSON.stringify(user))
        console.log(pathname === '/');
        if (pathname === '/' && user) {
            navigate({
                pathname:'/',
                search:`${storedPage ? storedPage + '$' :''}${storedFilter ? storedFilter : ''}`
            })
        }
    }, [user,pathname])

    return (
        <Routes>
            <Route element={<Layout/>} path={'/'}>
                <Route element={<Characters/>} path={'/'}/>
                <Route exact element={<Character/>} path={':id'}/>
            </Route>
        </Routes>
    );
};

export default PrivateRoutes;