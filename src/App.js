import { useState } from "react";
import AddUserForm from "./components/AddUser/AddUserForm";
import UsersList from "./components/AddUser/UsersList";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  const addNewUser = (uName, uAge) => {
    setUsers((prevData) => {
      return [{ id: Math.random(), username: uName, age: uAge }, ...prevData];
    });
  };

  const deleteUserHandler = (userID) => {
    const newData = users.filter((user) => user.id != userID);
    setUsers(newData);
  };

  return (
    <div className="App">
      <AddUserForm onAddUser={addNewUser} />
      <UsersList users={users} onDelete={deleteUserHandler} />
    </div>
  );
}

export default App;
