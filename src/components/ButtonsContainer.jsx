import styles from "./ButtonsContainer.module.css";
const ButtonsContainer = ({onButtonClick}) => {
  const buttonsNames = [
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
  const handleClick=(buttonName)=>{
    onButtonClick(buttonName);
  }
  return (
    <>
      <div className={styles.buttonsContainer}>
        {buttonsNames.map((buttonsName) => (
          <button className={styles.button} onClick={()=>handleClick(buttonsName)}>{buttonsName} </button>
        ))}
      </div>
    </>
  );
};
export default ButtonsContainer;
