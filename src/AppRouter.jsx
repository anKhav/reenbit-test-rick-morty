import React from 'react';
import {Route, Routes} from "react-router-dom";
import Characters from "./pages/Characters/Characters.jsx";
import Character from "./pages/Character/Character.jsx";
import Layout from "./Layout.jsx";
import Auth from "./pages/Auth/Auth.jsx";

const AppRouter = () => {
    return (
        <Routes>
            <Route element={<Layout/>} path={'/'}>
                <Route element={<Auth/>} path='/auth'/>
                <Route exact element={<Characters/>} path={'/'}/>
                <Route exact element={<Character/>} path={':id'}/>
            </Route>
        </Routes>
    );
};

export default AppRouter;