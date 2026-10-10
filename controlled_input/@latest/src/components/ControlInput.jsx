import { useState } from "react";

function ControlInput()
{

    const [name, setName]=useState("");
    return (
        <>
          <h1>Hello {name}</h1>

          <input type="text"
          value={name}
          onChange={(e)=>setName(e.target.value)} />


        
        </>
    );

}

export default ControlInput;