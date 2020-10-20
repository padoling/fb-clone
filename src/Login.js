import React from 'react'
import "./Login.css"
import { Button } from '@material-ui/core'

function Login() {
    const signIn = () => {
        //sign in...
    };

    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://img.icons8.com/fluent/240/000000/facebook-new.png" alt="facebook logo"/>
            </div>
            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>
        </div>
    )
}

export default Login
