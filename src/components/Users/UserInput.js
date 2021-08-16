import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import styles from "./UserInput.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helper/Wrapper";

function UserInput(props) {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
 
  // because now we use Ref to read the value
  //const [enterUsername, setEnterUsername] = useState("");
  //const [enterAge, setEnterAge] = useState("");
    const [error, setError] = useState();

  //function UsernameInput(event) {
    //With the help of event object, we can access the target of event which is the input and then the value property of the input to get the currently entered value
  //  setEnterUsername(event.target.value);
  //}

  //function AgeInput(event) {
  //  setEnterAge(event.target.value);
  //}

  function errorHandler() {
    setError(null);
  }

  function AddUser(event) {
    event.preventDefault();
    const enterName = nameInputRef.current.value;
    const enterUserAge = ageInputRef.current.value;
  
    if (enterName.trim().length === 0 || enterUserAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age.",
      });
      return;
    }
    //we use + here to be safe that enterAge is a number since it used to be a string
    if (+enterUserAge < 1) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid age greater than Zero.",
      });
      return;
    }
  
    props.onUserInput(enterName, enterUserAge);
    //setEnterUsername("");
    //setEnterAge("");
    //rarely use Ref to manipulate ur DOM but here we are just changing what the users entered
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';

  }
  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onError={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={AddUser}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
          //  value={enterUsername}
          //  onChange={UsernameInput}
            ref={nameInputRef}
          />
          <label htmlFor="age">Age(years)</label>
          <input 
            id="age" 
            type="number" 
          //  value={enterAge} 
          //  onChange={AgeInput} 
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
}


export default UserInput;
