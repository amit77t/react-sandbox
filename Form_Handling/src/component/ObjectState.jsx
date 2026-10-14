import { useState } from 'react';

function ObjectState() {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    password: ""
  })

  function submitHandler(event) {
    event.preventDefault();

    console.log("Your name :", formData);

  }

  return (
    <>
      <h2>One state object for multiple inputs</h2>

      <form onSubmit={submitHandler} >

        <label htmlFor="name">Enter Your Name </label>
        <input type="text" id="name"
          value={formData.name}
          onChange={(e) => setformData(prev => ({ ...prev, name: e.target.value }))}
          required
        />
        <br />
        <label htmlFor="email">Enter Your Email </label>


        <input type="email" id="email" value={formData.email}
          onChange={(e) => setformData(prev => ({
            ...prev, email: e.target.value
          }))} />
        <br />
        <label htmlFor="pass">Enter your password </label>
        <input type="password" id="pass"
          value={formData.password}
          onChange={(e) => setformData(prev => ({ ...prev, password: e.target.value }))} />
        <br />

        <button type="submit" >Submit</button>


      </form>

    </>
  )
}

export default ObjectState;