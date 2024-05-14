import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

function Login(){

  const[username, setUsername]=useState('')
  const[password, setPassword]=useState('')

  const {setUser}=useContext(UserContext)

  const btnHandler=(e)=>{
      e.preventDefault()
      setUser(username,password)

  }

  return(
    <div>
      <h2>LogIn</h2>
      <input type="text"
       placeholder="Enter Username"
      value={username}
      onChange={(e)=>setUsername(e.target.value)}
      />
      <br/>
      <input type="password"
       placeholder="Enter Password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
       />
      <button onClick={btnHandler}>Submit</button>
     
    </div>
  )

}
export default Login