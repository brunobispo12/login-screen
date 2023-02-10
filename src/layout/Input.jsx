/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useState } from "react";
import './Input.css'

const Input = (props) => {

    return(
        <form action="">
            <div className="labels">
                <input required type="text" id={props.inputType} className='inputs'/>
                <label for={props.inputType} className='labels'>{props.inputType}</label>
            </div>
        </form>
    )
}

export default Input