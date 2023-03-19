import React, {useEffect} from 'react';
import {Route, Routes, useNavigate, useParams} from "react-router-dom";
import Characters from "./pages/Characters/Characters.jsx";
import Character from "./pages/Character/Character.jsx";
import Layout from "./Layout.jsx";
import Auth from "./pages/Auth/Auth.jsx";
import {useSelector} from "react-redux";

const AppRouter = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const user = useSelector(state => state.user)


    useEffect(() => {
        const storedFilter = localStorage.getItem("filter")
        const storedPage = localStorage.getItem("page")
        if (!id && storedFilter) {
                navigate({
                    pathname:'/',
                    search:`${storedPage}&${storedFilter}`
                })
        }
        if (!user){
            navigate('/auth')
        }
    },[])
    return (
        <Routes>
            {
                user ?
                    <Route element={<Layout/>} path={'/'}>
                        <Route index element={<Characters/>} path={'/'}/>
                        <Route exact element={<Character/>} path={':id'}/>
                    </Route>
                    :
                    <Route element={<Layout/>} path={'/'}>
                        <Route index element={<Auth/>} path={'auth'}/>
                    </Route>
            }
        </Routes>
    );
};

export default AppRouter;