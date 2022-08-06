import { useState, useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorMessage from "../UI/ErrorMessage";
import styles from "./AddUserForm.module.css";

const AddUserForm = (props) => {
  const enterdUserName = useRef();
  const enterdUserAge = useRef();

  const [error, setError] = useState();

  const acceptMessage = () => {
    setError(null);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const userName = enterdUserName.current.value;
    const userAge = enterdUserAge.current.value;

    if (userName.trim().length == 0 || userAge.trim().length == 0) {
      setError({
        title: "inavlid  inputs ",
        message: "Please dont live any line EMPTY ",
      });
      return;
    }

    if (+userAge < 0) {
      setError({
        title: "inavlid  Age ",
        message: "Age must be above 0  ",
      });
      return;
    }

    props.onAddUser(userName, userAge);
    enterdUserName.current.value = "";
    enterdUserAge.current.value = "";
  };

  return (
    <>
      {error && (
        <ErrorMessage
          title={error.title}
          message={error.message}
          onAccept={acceptMessage}
        />
      )}
      <Card className={styles["input"]}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">Usermame:</label>
          <input id="username" type="text" ref={enterdUserName} />
          <label htmlFor="age">Age:</label>
          <input id="age" type="number" ref={enterdUserAge} />
          <Button type="submit">Add User </Button>
        </form>
      </Card>
    </>
  );
};

export default AddUserForm;
