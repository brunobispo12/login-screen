/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Input from "./Input";
import Button from "./Button";
import './Login-Box.css'

const Box = (props) => {
    
    return(
        <section id="login-screen">
            <div className="content-login">
                <div className="text">
                    <h1>Login</h1>
                    <p>Please login to continue</p>
                </div>
                <div className="Inputs">
                    <Input inputType='Login:'></Input>
                    <Input inputType='Password:'></Input>
                    <div className="forgot-password"><a href="#">Forgot password?</a></div>
                </div>
                <div className="button">
                    <Button></Button>
                </div>
                <div className="sigin">Doesn't have an account?<a href="#">Sign In</a></div>
            </div>
        </section>
    )
}

export default Box