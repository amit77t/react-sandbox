import { useState } from "react";

function Counter()
{
   const [count, setCount]=useState(0);

    function increase(){
        setCount((prev)=> prev+1);
    }

    function decrease()
    {
        setCount((prev)=>Math.max(0, prev-1));
    }

    function reset()
    {
        setCount(0);
    }


    return (
        <section className="counter-panel" aria-label="Counter controls">
            <p className="counter-label">Your current count</p>
            <h2 className="count-display" aria-live="polite">{count}</h2>

            <div className="counter-controls">
              <button className="counter-button counter-button--increase" onClick={increase}>Increase</button>
              <button className="counter-button counter-button--decrease" onClick={decrease}>Decrease</button>
              <button className="counter-button counter-button--reset" onClick={reset}>Reset</button>
            </div>


        </section>
    )
}


export default Counter;