import React, { useState } from 'react';
import AddUser from "./components/User/AddUser/AddUser";
import UsersList from "./components/User/UsersList/UsersList";


function App() {
    const [userList, setUserList] = useState([])

    const userDataHandler = (userName, userAge) => {
        setUserList((prevUserList) => {
           return [...prevUserList, {name: userName, userAge: userAge}]
        })
    }

    return (
    <div>
      <AddUser onAddUser={userDataHandler}/>
        <UsersList users={userList}/>
    </div>
  );
}

export default App;
