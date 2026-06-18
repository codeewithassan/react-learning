# React `useEffect` Hook Documentation

## What is `useEffect`?
* `useEffect` is a built-in React Hook that lets you synchronize a component with an external system (handling **Side Effects**).
* 🛠️ **Side Effects include:** Fetching data from an API, setting up timers/intervals, manually updating the browser DOM, or subscribing to chat servers.
* It replaces old class component lifecycle methods like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`.

---

## 1. Syntax Breakdown
```javascript
useEffect(() => {
  // 1. Write side-effect code here

  return () => {
    // 2. Optional: Write cleanup logic here (runs before component unmounts)
  };
}, [dependencies]); // 3. Optional: Dependency Array
```

---

## 2. Dependency Array Behaviors (The 3 Variations)

### Variation A: No Dependency Array (Runs on EVERY render)
Runs when the component loads, and re-runs every time any state or prop updates. Use this very carefully to avoid performance issues.
```javascript
useEffect(() => {
  console.log("I run on every single render!");
});
```

### Variation B: Empty Dependency Array `[]` (Runs ONLY ONCE on Mount)
Runs exactly once when the component first appears on the screen. This is perfect for initial API requests.
```javascript
useEffect(() => {
  console.log("Component has loaded (Mounted)!");
}, []); 
```

### Variation C: With Dependencies `[value]` (Runs when `value` changes)
Runs when the component loads, and re-runs only when the specific variable inside the brackets changes.
```jsx
const [userId, setUserId] = useState(1);

useEffect(() => {
  console.log(`User ID changed to: ${userId}. Fetching new data...`);
}, [userId]); // Re-runs whenever 'userId' updates
```

---

## 3. The Cleanup Function
If your side effect sets up something persistent (like a timer or a window scroll listener), you must return a **cleanup function** to destroy it. This prevents severe memory leaks in your app.

```javascript
useEffect(() => {
  const handleResize = () => console.log(window.innerWidth);
  window.addEventListener('resize', handleResize);

  // Cleanup block: Runs when the component disappears (unmounts)
  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);
```

---

## 4. Real-World Example: Digital Stopwatch Clock
This implementation puts all three conceptual patterns together. It spins up a ticking interval timer on load, updates a document window title tracking state, and stops background processes cleanly when closed.

```jsx
import React, { useState, useEffect } from 'react';

function DigitalStopwatch() {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  // EFFECT 1: Timer Engine (Handles Mount, Setup, and Cleanup)
  useEffect(() => {
    let intervalToken = null;

    if (isActive) {
      intervalToken = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }

    // CLEANUP FUNCTION: Clears the background timer if isActive changes or component leaves screen
    return () => {
      if (intervalToken) clearInterval(intervalToken);
    };
  }, [isActive]); // Re-runs layout setup precisely when isActive updates

  // EFFECT 2: Tab Title Sync (Runs when 'seconds' count updates)
  useEffect(() => {
    document.title = `Elapsed time: ${seconds}s`;
  }, [seconds]);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>⏱️ Native Activity Timer</h2>
      <div style={{ fontSize: '32px', margin: '15px 0', fontWeight: 'bold' }}>
        Time Elapsed: {seconds} seconds
      </div>
      
      <button 
        onClick={() => setIsActive(!isActive)}
        style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer', marginRight: '10px' }}
      >
        {isActive ? 'Pause Timer' : 'Start Timer'}
      </button>

      <button 
        onClick={() => { setSeconds(0); setIsActive(false); }}
        style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
      >
        Reset
      </button>
    </div>
  );
}

export default DigitalStopwatch;
```

---

## Quick Summary Checklist
* [x] **API Mounting:** Use `[]` arrays to make sure requests only trigger once.
* [x] **State Traps:** Never update a state variable inside `useEffect` without adding a dependency array, or you will cause an **infinite render loop**.
* [x] **Memory Management:** Always clear events, timers, or subscriptions inside the `return () => {}` cleanup code blocks.
