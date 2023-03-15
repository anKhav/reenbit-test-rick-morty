import React, {useEffect} from 'react';
import {Route, Routes, useLocation, useNavigate, useParams} from "react-router-dom";
import Characters from "./pages/Characters/Characters.jsx";
import Character from "./pages/Character/Character.jsx";
import Layout from "./Layout.jsx";
import Auth from "./pages/Auth/Auth.jsx";

const AppRouter = () => {
    const navigate = useNavigate()
    const {id} = useParams()


    useEffect(() => {
        const storedFilter = localStorage.getItem("filter")
        const storedPage = localStorage.getItem("page")
        if (!id && storedFilter) {
                navigate({
                    pathname:'/',
                    search:`${storedPage}&${storedFilter}`
                })
        }
    },[])
    return (
        <Routes>
            <Route element={<Layout/>} path={'/'}>
                <Route index element={<Characters/>} path={'/'}/>
                <Route exact element={<Character/>} path={':id'}/>
                {/*<Route element={<Auth/>} path={'/auth'}/>*/}
            </Route>
        </Routes>
    );
};

export default AppRouter;