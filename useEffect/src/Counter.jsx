
import { useState , useEffect} from 'react'

function Counter()
{
    const [count, setCount] = useState(0);
    
    console.log("A");

    useEffect(() => {
      console.log("B");
    }, []);

  
    return (
      <div>
        <h1>Count: {count}</h1>
  
        <button onClick={() => setCount(count + 1)}>
          Increase
        </button>
      </div>
    );
}


export  default Counter;