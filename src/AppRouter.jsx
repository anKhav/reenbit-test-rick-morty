import React, {useEffect} from 'react';
import {Route, Routes, useNavigate} from "react-router-dom";
import Characters from "./pages/Characters/Characters.jsx";
import Character from "./pages/Character/Character.jsx";
import Layout from "./Layout.jsx";

const AppRouter = () => {
    const navigate = useNavigate()


    useEffect(() => {
        const storedFilter = localStorage.getItem("filter")
        const storedPage = localStorage.getItem("page")
        if (storedFilter && storedPage) {
            navigate({
                pathname:'/',
                search:`${storedPage}&${storedFilter}`
            })
        } else if (storedPage) {
            navigate({
                pathname:'/',
                search:`${storedPage}`
            })
        }
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