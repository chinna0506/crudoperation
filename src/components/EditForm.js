import React, { useState, useEffect } from "react";

export const EditForm = (props) => {
    const { hideEditForm,currentUser,updateUser, handleSubmit } = props;

    const [user, setUser] = useState(currentUser)

    useEffect(
        () => {
          setUser(currentUser);
        },
        [props]
      );
    
      const handleInputChange = event => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
      };

      const handleUpdateChange = (event) => {
        event.preventDefault();
        updateUser(user.phoneNumber, user);
      }
    
    return(
        <div>
            <form>
                <input 
                type="text" 
                placeholder="first name"
                name="firstName" 
                value={user.firstName} 
                onChange={handleInputChange} 
                />
                <br />
                <input 
                type="text"
                placeholder="last name"
                name="lastName"
                value={user.lastName} 
                onChange={handleInputChange} 
                /><br />
                <input 
                type="text" 
                placeholder="age"
                name="age" 
                value={user.age} 
                onChange={handleInputChange} 
                /><br />
                <input 
                type="text" 
                placeholder="phone number"
                name="phoneNumber" 
                value={user.phoneNumber} 
                onChange={handleInputChange} 
                /><br />
                <button type="submit" onClick={handleUpdateChange}>Update User</button>
                <button type="button" onClick={hideEditForm}>Cancel</button>
            </form>
        </div>
    )
}