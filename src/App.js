import React, { useState } from "react";
import UserInput from "./components/Users/UserInput";
import UserData from "./components/Users/UserData";

function App() {
  

  function AddUser(uName, uAge) {
    setUserData((prevUserData) => {
      return [
        ...prevUserData,
        { name: uName, age: uAge, id: Math.random().toString()},
      ];
    });
  }
  return (
    <div>
      <UserInput onUserInput={AddUser}/>
      <UserData users={userData} />
    </div>
  );
}

export default App;
