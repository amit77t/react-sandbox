
import { useState } from 'react'

const LiveNameClearButton = () => {

     const [name, setName]=useState("");
    


  return (  

    <>

        <h1>Your name is {name}</h1>
        <input type="text" value={name}  onChange={(e)=>setName(e.target.value)} />

        <button onClick={()=>setName("")} >Clear</button>
    </>
  );

}

export default LiveNameClearButton;
