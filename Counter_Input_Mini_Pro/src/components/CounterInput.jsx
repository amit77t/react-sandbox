import React from 'react'
import { useState } from 'react'

const CounterInput = () => {
  const [count, setCount] = useState(0)
  const [input, setInput] = useState('')

  function increase() {
    setCount((prev) => prev + 1)
  }

  function decrease() {
    setCount((prev) => Math.max(0, prev - 1))
  }

  function handleSetCount() {
    const nextValue = Number(input)
    if (!Number.isNaN(nextValue)) {
      setCount(nextValue)
    }
  }

  return (
    <div className="counter-app">
      <div className="counter-card">
        <p className="eyebrow">Mini Project</p>
        <h1>Counter + Input</h1>

        <div className="counter-display">
          <span className="label">Current count</span>
          <strong>{count}</strong>
        </div>

        <div className="button-row">
          <button className="action-button primary" onClick={increase}>
            Increase
          </button>
          <button className="action-button secondary" onClick={decrease}>
            Decrease
          </button>
        </div>

        <div className="input-panel">
          <label htmlFor="count-input">Enter a number</label>
          <div className="input-row">
            <input
              id="count-input"
              type="number"
              value={input}
              placeholder="Type here"
              onChange={(e) => setInput(e.target.value)}
            />
            <button className="action-button accent" onClick={handleSetCount}>
              Set
            </button>
          </div>
        </div>

        <button
          className="action-button ghost"
          onClick={() => {
            setInput('')
            setCount(0)
          }}
        >
          Clear
        </button>
      </div>
    </div>
  )
}

export default CounterInput