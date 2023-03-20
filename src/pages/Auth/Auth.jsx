

import {useEffect, useRef} from 'react';
import jwtDecode from "jwt-decode";

import './Auth.scss'
import {GoogleAuthService} from "../../services/GoogleAuthService.js";
import {useDispatch, useSelector} from "react-redux";
// import {login} from "../../features/UserSlice.js";
import {useNavigate} from "react-router-dom";
import {GoogleLogin, useGoogleLogin} from "@react-oauth/google";
import {login} from "../../features/UserSlice.js";

const Auth = () => {
    const authRef = useRef()
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    const navigate = useNavigate()
    const responseGoogle = (response) => {
        const token = response.credential
        const userInfo = jwtDecode(token)
        dispatch(login(userInfo))
        navigate('/')
    }
    return (
        <section className='auth'>
            <div className="auth__content">
                <h2 className="auth__title">Login with:</h2>
                <ul className='auth__socials'>
                    <GoogleLogin
                        type="icon"
                        render={(renderProps) => (
                            <button
                                className=""
                                onClick={renderProps.onClick}
                                disabled={renderProps.disabled}
                            >
                            </button>
                        )}
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy="single_host_origin"
                    />
                </ul>
            </div>
        </section>
    );
};

export default Auth;