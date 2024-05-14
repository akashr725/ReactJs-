import { useState } from 'react'

const FunCounter=()=>{

  const initialCount=0;

    let [count, setCount] = useState(initialCount)

  return (
    <>

    <h1>React Hook Practiece</h1>
    <br/>
    <h3>Here is a Counter</h3>
    <br/>

    <button onClick={()=>setCount(prevCount=>prevCount+1)}>
      +
    </button>
    <div>Count: {count}</div>
    <button onClick={()=>setCount(prevCount=>prevCount-1)}>
      -
    </button>
    
    <button onClick={()=>setCount(initialCount)}>Reset</button>

    </>
  );

}
 export default FunCounter;