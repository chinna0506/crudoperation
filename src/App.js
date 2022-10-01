import { AddForm } from './components/AddForm';
import { EditForm } from './components/EditForm';
import './App.css';
import { useState } from 'react';
import { Table } from './components/Table';

function App() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([])
  const [editing, setEditing] = useState(false);
  const [newMsg, setNewMsg] = useState("")
    const [userData, setUserData] = useState(
        {
            firstName: "",
            lastName: "",
            age: "",
            phoneNumber: ""
        }
    );

    const handleChange = (e) => {
        const { name, value } = e.target; 
       setUserData({ ...userData, [name]: value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
       const newData = [...data, userData];
       setData(newData);
       setUserData({
        firstName: "",
        lastName: "",
        age: "",
        phoneNumber: ""
    });
    }

  const hideShow = () => {
    setShow(!show);
  }
  const hideEditForm = () => {
    setEditing(!editing)
  }
  const deleteHandler = (indexValue) => {
    const newData = data.filter((item, index) => index != indexValue)
    setData(newData);
  }
  const [currentUser, setCurrentUser] = useState({
        firstName: "",
        lastName: "",
        age: "",
        phoneNumber: "",
  });

  const editRow = user => {
    setEditing(true);
    setCurrentUser({ firstName: user.firstName, lastName: user.lastName, age:user.age, phoneNumber: user.phoneNumber });
  };
  const updateUser = (phoneNumber, updateUser) => {
    setEditing(false);
    setData(data.map(user => (user.phoneNumber === phoneNumber ? updateUser : user)));
  };

  const funParam = (value) => {
    setNewMsg(value);
  }
  return (
    <div className="App">
     <h3>Sample Crud Operation</h3>
     <div>
       <button type="button" onClick={()=>setShow(true)}>Add User</button>
       {show === true ? <AddForm hideShow={hideShow} message={funParam} userData={userData} handleChange={handleChange} handleSubmit={handleSubmit} />: null}
     </div>
     <div className="table">
        <Table data={data} deleteHandler={deleteHandler} editRow={editRow} />
     </div>
     <div>
       { editing ? 
       <EditForm 
       hideEditForm={hideEditForm}
       setEditing={setEditing}
       currentUser={currentUser}
       updateUser={updateUser}
       />: null}
     </div>
    </div>
  );
}

export default App;
