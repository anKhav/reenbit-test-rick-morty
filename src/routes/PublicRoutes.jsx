import React, {useEffect} from 'react';
import {Route, Routes, useLocation, useNavigate, useSearchParams} from "react-router-dom";
import Layout from "../Layout.jsx";
import Auth from "../pages/Auth/Auth.jsx";
import {useSelector} from "react-redux";

const PublicRoutes = () => {
    const user = useSelector(state => state.user)
    const navigate = useNavigate()
    const {pathname, search} = useLocation()
    const [searchParam, setSearchParams] = useSearchParams()
    const loc = useLocation()
    console.log(loc);
    useEffect(() => {
        console.log(user);
        // pathname !== 'auth' && navigate('/auth')
        if (pathname !== 'auth' && search.length !== 0){
            setSearchParams('')
            navigate('/auth')
        }
    }, [user, search])
    return (
        <Routes>
            <Route element={<Layout/>} path={'/'}>
                <Route element={<Auth/>} path={'/auth'}/>
            </Route>
        </Routes>
    );
};

export default PublicRoutes;