import "./App.css";
import { useState } from "react";
import QueueForm from "./components/QueueForm";
import QueueDisplay from "./components/QueueDisplay";

function App() {

  const [queue, setQueue] = useState([]);


  const addToQueue = (customer) => {  
    setQueue([...queue, {...customer, id: Date.now() ,status:"waiting"}]);

  };

  const removeFromQueue = (id) => {

     setQueue(queue.filter((customer) => customer.id !== id));
  };

  const updateStatus = (id, newStatus) => {

      setQueue(queue.map((customer) => customer.id === id ? {...customer, status: newStatus} : customer));  

  };


  return (
    <div className='app'>
      <header>
        <h1>
          Queue Management Sysytem
        </h1>
        <p>Manage your customers efficiently</p>
      </header>

      <main>
           <QueueForm onAdd={addToQueue} />
           <QueueDisplay queue={queue} />
      </main>
    </div>

  )
}


export default App;
