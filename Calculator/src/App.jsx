import { useState } from "react";
import styles from "./App.module.css";
import InputText from "./Components/InputText";
import ButtonDiv from "./Components/ButtonDiv";

function App() {
  return (
    <div className={styles.calculator}>
      <InputText></InputText>
      <ButtonDiv></ButtonDiv>
    </div>
  );
}

export default App;
