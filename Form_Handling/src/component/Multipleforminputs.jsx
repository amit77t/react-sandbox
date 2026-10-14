import { useState } from 'react';

function Multipleforminputs(s)
{  
    const [name, setName]=useState("");
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");

    function submitHandler(event)
    {  
        event.preventDefault();

        console.log("Your name :",name);
        console.log("Your email :",email);
        console.log("Your password :", password);

    }


    

   
    return (
        <>
           <h1>Multiple form inputs</h1>


           <form onSubmit={submitHandler}>

            <label htmlFor="name">Enter Your Name </label>
            <input type="text"  id="name"
            value={name}
            onChange={(e)=>setName(e.target.value)} 
            required
            />
            <br />
            <label htmlFor="email">Enter Your Email </label>


            <input type="email" id="email" value={email}
            onChange={(e)=>setEmail(e.target.value)} required />
            <br />
            <label htmlFor="pass">Enter your password </label>
            <input type="password"  id="pass"
            value={password}
            onChange={(e)=>setPassword(e.target.value)} required />
            <br />

            <button type="submit" >Submit</button>

           </form>
        </>
    )
}


export default Multipleforminputs;