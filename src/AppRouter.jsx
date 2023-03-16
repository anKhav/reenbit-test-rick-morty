import React, {useEffect} from 'react';
import {Route, Routes, useNavigate, useParams} from "react-router-dom";
import Characters from "./pages/Characters/Characters.jsx";
import Character from "./pages/Character/Character.jsx";
import Layout from "./Layout.jsx";
import {useSelector} from "react-redux";
import PrivateRoutes from "./routes/PrivateRoutes.jsx";
import PublicRoutes from "./routes/PublicRoutes.jsx";

const AppRouter = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const user = useSelector(state => state.user)


    return (
            user ? <PrivateRoutes/> : <PublicRoutes/>
    );
};

export default AppRouter;