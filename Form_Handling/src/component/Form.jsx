import { useState } from 'react';
function Form()
{  
    const [name, setName]=useState("");

    function handleSubmit(event)
    {
        event.preventDefault();
        console.log("your name : ", name);
    }
    

    return(
        <>
           <h3>Type your name and submit. This demo simulates the React form flow.</h3>

             <form onSubmit={handleSubmit}>

                <label htmlFor="name">Your Name</label>
                <input 
                id="name"
                type="text"
                 value={name}
                 onChange={(e)=>setName(e.target.value)} 
                 required  />
                 <button type='submit' >Submit</button>
               

             </form>
        </>
    );
}



export default Form;