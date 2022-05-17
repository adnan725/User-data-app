import React from 'react';
import AddUser from "./components/User/AddUser/AddUser";
import UsersList from "./components/User/UsersList/UsersList";


function App() {
  return (
    <div>
      <AddUser/>
        <UsersList users={[]}/>
    </div>
  );
}

export default App;
