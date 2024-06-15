import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import styles from "./App.module.css";
import { useState } from "react";
const App = () => {
  let [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonValue) => {
    if (buttonValue === "C") {
      // Clear the calculator display
      setCalVal("");
    } else if (buttonValue === "=") {
      try {
        setCalVal(eval(calVal));
      } catch (e) {
        setCalVal("Error");
      }
    } else {
      // Append the button value to the current calVal
      setCalVal((prevCalVal) => prevCalVal + buttonValue);
    }
  };
  return (
    <>
      <div className={styles.calculator}>
        <Display calVal={calVal} />
        <ButtonsContainer onButtonClick={onButtonClick} />
      </div>
    </>
  );
};
export default App;
