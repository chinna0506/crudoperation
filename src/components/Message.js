import React, { useEffect, useState } from "react";

export const Message = (props) => {
    const[message, setMessage] = useState("HIIII");

    useEffect(() => {
        setMessage("User Added Successfully..!")
        props.getMessage(message)
    },[])
return(
    <div>{message}</div>
)
}