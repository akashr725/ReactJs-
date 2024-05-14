import styles from "./ButtonDiv.module.css";

const ButtonDiv = () => {
  const btn = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div className={styles.buttonDiv}>
      {btn.map((btnName) => (
        <button className={styles.button}>{btnName}</button>
      ))}
    </div>
  );
};
export default ButtonDiv;
