

import {useEffect, useRef} from 'react';
import jwtDecode from "jwt-decode";

import './Auth.scss'
import {GoogleAuthService} from "../../services/GoogleAuthService.js";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../features/UserSlice.js";
import {useNavigate} from "react-router-dom";

const Auth = () => {
    const authRef = useRef()
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    const navigate = useNavigate()
    console.log(user);
    const handleCallbackResponse = async (response)  => {
        const user = await jwtDecode(response.credential)
        console.log(user);
        dispatch(login(user))
        navigate('/')

    }
    useEffect(() => {
        GoogleAuthService.init(
            '792789015648-nsnptboa912bvuvujfsugeci6pj45k72.apps.googleusercontent.com',
            handleCallbackResponse
        )
        GoogleAuthService.renderButton(
            authRef.current,
            {type:'icon', size:'large', shape:'circle'}
        )
    },[])
    return (
        <section className='auth'>
            <div className="auth__content">
                <h2 className="auth__title">Login with:</h2>
                <ul className='auth__socials'>
                    <li>
                        <div className="auth__button" ref={authRef}></div>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Auth;