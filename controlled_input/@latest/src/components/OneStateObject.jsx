import React, { useState } from 'react'

const OneStateObject = () => {
   
    const [form, setForm]=useState({
        name : '',
        email : ''
    });




  return (
      <>
      <h1>Form Input Using Object</h1>

       <h3>Name :{form.name}</h3>

        <input type="text" value={form.name} onChange={(e)=>setForm(prev =>({
            ...prev,
            name:e.target.value,
        }))} />

        <h3>Email :{form.email}</h3>
        <input type="email" value={form.email} onChange={(e)=>setForm(prev =>({
            ...prev,
            email:e.target.value,
            
        }))} />
      </>

  );
}

export default OneStateObject