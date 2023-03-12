import React, {useEffect} from 'react';
import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import Characters from "./pages/Characters/Characters.jsx";
import Character from "./pages/Character/Character.jsx";
import Layout from "./Layout.jsx";

const AppRouter = () => {
    const navigate = useNavigate()
    const {pathname} = useLocation()

    useEffect(() => {
        pathname === '/' && navigate({
            pathname:'/',
            search:'page=1'
        })
    },[])
    return (
        <Routes>
            <Route element={<Layout/>} path={'/'}>
                <Route index element={<Characters/>} path={'/'}/>
                <Route exact element={<Character/>} path={':id'}/>
            </Route>
        </Routes>
    );
};

export default AppRouter;