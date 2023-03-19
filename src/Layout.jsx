import React from 'react';
import {Outlet} from "react-router-dom";
import {useSelector} from "react-redux";
import UserInfo from "./components/userInfo/UserInfo.jsx";

const Layout = () => {
    const user = useSelector(state => state.user)
    console.log(user);
    return (
        <>
            {
                user && <UserInfo/>
            }
            <Outlet/>
        </>
    );
};

export default Layout;