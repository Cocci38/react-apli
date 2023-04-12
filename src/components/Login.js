import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useRef, useState } from "react";
import { auth } from "../utils/firebase.config";

const Login = () => {
    const registerEmail = useRef();
    const registerPassword = useRef();
    const [error, setError] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const user = await signInWithEmailAndPassword(auth, registerEmail.current.value, registerPassword.current.value);
            console.log(user);
        } catch (error) {
            console.log(error.message);
            setError(true);
        }

        console.log(registerEmail.current.value, registerPassword.current.value);
    }
    return (
        <div className="login-container">
            <div className="login">
                <h3> Se connecter </h3>
                <form className="form-login" onSubmit={e => handleLogin(e)}>
                    <input type="email" placeholder="Email" required ref={registerEmail} />
                    <input type="password" placeholder="mot de passe" required ref={registerPassword} />
                    <input type="submit" value="Se connecter" />
                    <span>{error && "Le mail ou le mot de passe ne correspondent pas"}</span>
                </form>
            </div>

        </div>
    );
};

export default Login;