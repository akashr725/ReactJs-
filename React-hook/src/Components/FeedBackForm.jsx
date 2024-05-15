import { useState } from "react"


const FeedbackForm=()=>{

  const [isSent, setIsSent]=useState(false);
  const [message, setMessage]=useState('')

  if(isSent){
    return <h1>Thank You</h1>
  }
  else{
    return(
      <form
      onSubmit={e=>{e.preventDefault();
      alert(`Sending: "${message}"`);
      setIsSent(true)
      }}
      >
      <textarea
      placeholder="message"
      value={message}
      onChange={e=>setMessage(e.target.value)}
      
      />
      <br/>
      <button type="submit"> Submit</button>

      </form>
    )
  }

}
export default FeedbackForm;