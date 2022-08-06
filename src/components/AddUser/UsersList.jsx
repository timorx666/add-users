import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./UsersList.module.css";

const UsersList = (props) => {
  if (props.users.length == 0) {
    return (
      <>
        <Card className={styles["users"]}>
          <ul>
            <li>Sorry We Didnt Find Any Users</li>
          </ul>
        </Card>
      </>
    );
  }

  const deleteUser = (event) => {
    props.onDelete(event.target.id);
  };

  return (
    <>
      <Card className={styles["users"]}>
        <ul>
          {props.users.map((user) => (
            <li key={user.id}>
              {`${user.username} (${user.age} Year Old)`}
              <input
                id={user.id}
                value="Delete"
                type="button"
                onClick={deleteUser}
                className={styles["delete-button"]}
              />
            </li>
          ))}
        </ul>
      </Card>
    </>
  );
};

export default UsersList;
