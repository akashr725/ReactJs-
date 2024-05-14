import { useState } from "react"
const StateHook=()=>{

  const [name, setName]=useState({firstName:'', lastName:''});

  return(<div>

        <form>

          <input 
          type="text"
          value={name.firstName}
          onChange={e=>setName({...name,firstName:e.target.value})}
          />
           <input 
          type="text"
          value={name.lastName}
          onChange={e=>setName({...name,lastName:e.target.value})}
          />
          <h2>Your firstname= {name.firstName}</h2>
          <h2>Your lastName= {name.lastName}</h2>
        </form>

  </div>)
}
export default StateHook