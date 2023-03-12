import React from 'react';
import {Route, Routes} from "react-router-dom";
import Characters from "./pages/Characters/Characters.jsx";
import Character from "./pages/Character/Character.jsx";

const AppRouter = () => {
    return (
        <Routes>
            <Route element={<Characters/>} path={'/'}/>
            <Route element={<Character/>} path={'/character'}/>
        </Routes>
    );
};

export default AppRouter;