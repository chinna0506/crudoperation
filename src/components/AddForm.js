import React, { useEffect, useState } from "react";
import { Message } from "./Message";

export const AddForm = (props) => {
    const { hideShow,userData,handleChange, handleSubmit, message } = props;

    const [msg , setMsg] = useState()
    
    useEffect(() => {
        props.message(msg)
        
    }, [])

    const getMessage = (msgTxt) => {
        setMsg(msgTxt)
    }
    return(
        <div>
            <form>
                <input 
                type="text" 
                placeholder="first name"
                name="firstName" 
                value={userData.firstName} 
                onChange={handleChange} /><br />
                <input 
                type="text"
                placeholder="last name"
                name="lastName"
                value={userData.lastName} 
                onChange={handleChange} /><br />
                <input 
                type="text" 
                placeholder="age"
                name="age" 
                value={userData.age} 
                onChange={handleChange} /><br />
                <input 
                type="text" 
                placeholder="phone number"
                name="phoneNumber" 
                value={userData.phoneNumber} 
                onChange={handleChange} /><br />
                <button type="submit" onClick={handleSubmit}>Add</button>
                <button type="button" onClick={hideShow}>Cancel</button>
            </form>
            <Message getMessage={getMessage}/>
        </div>
    )
}