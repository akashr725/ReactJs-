import { useState } from 'react'
import './App.css'
import ClockHeading from "./Components/ClockHeading";
import ClockMoto from './Components/ClockMoto';
import CtimeDate from './Components/CtimeDate';

function App() {
  return (
   <center>
    <ClockHeading/>
    <ClockMoto/>
    <CtimeDate/>
   </center>
    
  );
}

export default App
