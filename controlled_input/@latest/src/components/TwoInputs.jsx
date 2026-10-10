import { useState } from "react"


const TwoInputs = () => {

   const [name, setName]=useState("");
   const [email, setEmail]= useState("");


   


  return (
    <>   
         <h1>Two Inputs</h1>
         <hr />
        <h2 >Your name is {name }</h2>

        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
        <h3>Your email is {email}</h3>

          <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />

         <br/>



        <button onClick={()=>{setName(""),setEmail("") }} >Clear</button>
        
    </>
  )
}

export default TwoInputs