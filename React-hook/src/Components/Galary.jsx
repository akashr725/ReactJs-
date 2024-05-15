import { useState } from "react"
import { sculptureList } from "./data"

const Galary=()=>{

  const [index, setIndex]=useState(0);
  const [show, setShow]=useState(false);

  let hasPrev=index>0;
  let hasNxt=index<sculptureList.length-1;


  const handlePrev=()=>{
    if(hasPrev){
      setIndex(index-1);
    }
  }
  const handleNext=()=>{
    if(hasNxt){
      setIndex(index+1);
    }
  }
  const handleMore=()=>{
    setShow(!show);
  }

  let sculp=sculptureList[index]


  return(
    <div>

    <button onClick={handlePrev} disabled={!handlePrev}>Previos page</button>
    <button onClick={handleNext} disabled={!handleNext}>Next page</button>

    <h2>
      <span>{sculp.name}</span>
       by {sculp.artist}
    </h2>

    <span>
      ({index+1}of{sculptureList.length})
    </span>

    <button onClick={handleMore}>
      {show?'Hide':'Show'} Details
    </button>

    {show && <p>{sculp.description}</p>}
    <img

      src={sculp.url}
      alt={sculp.alt}
    />
    

    </div>
  )

}
export default Galary;