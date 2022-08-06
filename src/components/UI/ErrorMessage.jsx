import ReactDom from "react-dom";
import Card from "./Card";
import Button from "./Button";
import styles from "./ErrorMessage.module.css";

const BackDrop = (props) => {
  return <div className={styles["backdrop"]} onClick={props.onClick}></div>;
};

const Modal = (props) => {
  return (
    <Card className={styles["modal"]}>
      <header className={styles["header"]}>
        <h2>{props.title}</h2>
      </header>
      <p className={styles["content"]}>{props.message}</p>
      <div className={styles["actions"]}>
        <Button type="button" onClick={props.onAccept}>
          okay
        </Button>
      </div>
    </Card>
  );
};

const ErrorMessage = (props) => {
  return (
    <>
      {ReactDom.createPortal(
        <BackDrop onClick={props.onAccept} />,
        document.getElementById("backdrop-root")
      )}

      {ReactDom.createPortal(
        <Modal
          title={props.title}
          message={props.message}
          onAccept={props.onAccept}
        />,
        document.getElementById("modal-root")
      )}
    </>
  );
};

export default ErrorMessage;
