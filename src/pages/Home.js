import React from "react";
import { auth, provider } from '../firbase-config';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import logoImg from "../logo.webp"
function Home({ setIsAuth }) {
    let navigate = useNavigate();

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem("isAuth", true);
            setIsAuth(true);
            navigate("/viewposts")
        });
    };

    return (
        <div className="loginPage">
            <p style={{ fontSize: '75px', fontWeight: 'bold' }}>
                Wondering about your next Project?
            </p>
            <p style={{ fontSize: '30px', fontWeight: 'bold' }}>
                Join an all new communtiy and create the next big thing
            </p>
            <p style={{ fontSize: '22px', fontWeight: 'bold', marginTop: '30px' }}>
                Sign In With Google To Continue with ProjectTree
            </p>
            <button className="login-with-google-btn" onClick={signInWithGoogle}>
                Sign in with Google
            </button>

            <img style={{height: '200px', width: '200px', marginTop: '40px'}}src={logoImg}></img>
        </div>
    )
}

export default Home;