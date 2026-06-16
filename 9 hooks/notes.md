# React Hooks Documentation

## What are Hooks?
* Hooks are built-in functions introduced in React 16.8.
* They allow you to use state and other React features in **Functional Components** without writing class components.
* Their names always start with the word **`use`** (e.g., `useState`, `useEffect`).

---

## 1. The Rules of Hooks
Before using hooks, you must follow these two absolute rules:
1. **Only call Hooks at the top level:** Do not call hooks inside loops, conditions (`if` statements), or nested functions.
2. **Only call Hooks from React Functions:** Call them inside React functional components or custom hooks, not regular JavaScript functions.

---

## 2. `useState` (Managing State)
This hook allows you to add state (local data tracking) to your functional components.

### Syntax & Example:
```jsx
import { useState } from 'react';

function Counter() {
  // Declare a state variable named "count" initialized to 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
```

---

## 3. `useEffect` (Handling Side Effects)
This hook lets you perform side effects in your components, such as fetching data from an API, setting up a subscription, or manually changing the DOM.

### Syntax & Example:
```jsx
import { useState, useEffect } from 'react';

function DataFetcher() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // This runs ONCE when the component loads (mounts)
    fetch('https://example.com')
      .then(res => res.json())
      .then(data => setData(data));
  }, []); // Empty dependency array means: run only on mount

  return <div>Data loaded successfully!</div>;
}
```

### Dependency Array Behavior:
* `useEffect(() => {})` -> Runs on **every** single render.
* `useEffect(() => {}, [])` -> Runs **only once** when component mounts.
* `useEffect(() => {}, [value])` -> Runs on mount, and **whenever `value` changes**.

---

## 4. `useRef` (Referencing DOM Elements & Values)
`useRef` is used to directly look at or control a DOM element (like focusing an input box) or to persist a value across renders without triggering a re-render.

### Example (Focusing an input field):
```jsx
import { useRef } from 'react';

function TextInputFocus() {
  const inputEl = useRef(null);

  const onButtonClick = () => {
    // Directly focus the text input using the native DOM API
    inputEl.current.focus();
  };

  return (
    <div>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </div>
  );
}
```

---

## 5. `useContext` (Global State)
This hook is used to share data across your entire app easily without passing props manually through every single level (avoiding "prop drilling").

### Example:
```jsx
import { useContext, createContext } from 'react';

// 1. Create a Context
const ThemeContext = createContext('light');

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  // 2. Consume the context inside a deeply nested child
  const theme = useContext(ThemeContext);
  return <div>Current active theme is: {theme}</div>;
}
```

---

## 6. `useReducer` (Complex State Management)
`useReducer` is an alternative to `useState`. It is used for managing complex state logic that involves multiple sub-values or when the next state depends on the previous one. It works using a actions and a reducer function.

### Example:
```jsx
import { useReducer } from 'react';

// 1. Define initial state and reducer logic
const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment': return { count: state.count + 1 };
    case 'decrement': return { count: state.count - 1 };
    default: throw new Error();
  }
}

function CounterWithReducer() {
  // 2. Initialize useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </div>
  );
}
```

---

## 7. `useMemo` (Optimizing Expensive Calculations)
`useMemo` caches (memoizes) the **result of a calculation** between re-renders. It only recalculates the value when one of its dependencies changes, saving processing power.

### Example:
```jsx
import { useState, useMemo } from 'react';

function ExpensiveCalculationComponent() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  // Heavy calculation function
  const expensiveCalculation = (num) => {
    for (let i = 0; i < 1000000000; i++) {} // Fake heavy loop
    return num * 2;
  };

  // Only re-runs if 'count' changes. Adding items to 'todos' won't lag this component!
  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  return (
    <div>
      <p>Calculated Value: {calculation}</p>
      <button onClick={() => setCount(count + 1)}>Change Count</button>
    </div>
  );
}
```

---

## 8. `useCallback` (Optimizing Function Re-creations)
`useCallback` caches (memoizes) the **function definition itself** between re-renders. It prevents child components from re-rendering unnecessarily when you pass inline functions down as props.

### Example:
```jsx
import { useState, useCallback, memo } from 'react';

// Child component wrapped in memo to prevent empty renders
const ListButton = memo(({ addItem }) => {
  console.log("Button Rendered");
  return <button onClick={addItem}>Add Random Item</button>;
});

function ParentApp() {
  const [items, setItems] = useState([]);
  const [theme, setTheme] = useState("light");

  // Caches the function definition. Changing the theme won't re-create this function
  const addItem = useCallback(() => {
    setItems((prev) => [...prev, Math.random()]);
  }, []); 

  return (
    <div className={theme}>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>Toggle Theme</button>
      <ListButton addItem={addItem} />
    </div>
  );
}
```

---

## 9. Real-World Example: Dashboard with Filtered Items & Reducer Logs
This example integrates multiple hooks. It utilizes `useReducer` to manage product state logs, `useRef` to target the search field, `useMemo` to safely filter a heavy product array without performance lag, and `useCallback` to pass an optimize data-clearing action down to children.

```jsx
import React, { useState, useEffect, useRef, useReducer, useMemo, useCallback } from 'react';

// 1. Reducer for managing application system status logs
const logReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS': return [...state, `Successfully loaded ${action.count} products.`];
    case 'CLEAR_SEARCH': return [...state, 'User cleared search history.'];
    default: return state;
  }
};

function AdvancedDashboard() {
  const [query, setQuery] = useState('');
  const [products, setProducts] = useState([]);
  const [logs, dispatch] = useReducer(logReducer, []);
  
  const searchInputRef = useRef(null);

  // Focus input on load
  useEffect(() => { searchInputRef.current.focus(); }, []);

  // Simulating initial batch fetch
  useEffect(() => {
    fetch('https://dummyjson.com/products/search?q=${encodeURIComponent(query)}')
      .then(res => res.json())
      .then(data => {
        setProducts(data.products || []);
        dispatch({ type: 'FETCH_SUCCESS', count: data.products.length });
      });
  }, []);

  // Performance Optimization: Cache filtered array output
  const filteredProducts = useMemo(() => {
    return products.filter(product => 
      product.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, products]);

  // Performance Optimization: Cache function reference passed to clear button
  const handleClear = useCallback(() => {
    setQuery('');
    dispatch({ type: 'CLEAR_SEARCH' });
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', display: 'flex', gap: '40px' }}>
      <div style={{ flex: 2 }}>
        <h2>🔍 Inventory Engine (Memoized Search)</h2>
        <input
          ref={searchInputRef}
          type="text"
          placeholder="Filter products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ padding: '8px', width: '250px', marginRight: '10px' }}
        />
        <button onClick={handleClear}>Clear</button>

        <ul style={{ marginTop: '15px' }}>
          {filteredProducts.map(p => (
            <li key={p.id}>{p.title} - \${p.price}</li>
          ))}
        </ul>
      </div>

      <div style={{ flex: 1, background: '#f4f4f4', padding: '15px', borderRadius: '5px' }}>
        <h3>📜 System Log Actions (Reducer)</h3>
        <ul>
          {logs.map((log, index) => <li key={index} style={{ fontSize: '13px' }}>{log}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default AdvancedDashboard;
```
---

## 7. Real-World Example 2: Dynamic Product Search Engine
This production-ready example combines multiple hooks working together. It uses `useState` to save user input and API data, `useEffect` to trigger a backend search whenever the query changes, and `useRef` to auto-focus the input box as soon as the user opens the page.

```jsx
import React, { useState, useEffect, useRef } from 'react';

function ProductSearchEngine() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const searchInputRef = useRef(null);

  // Auto-focus search box on page load
  useEffect(() => {
    searchInputRef.current.focus();
  }, []);

  // Fetch data automatically when query changes
  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
      return;
    }

    setLoading(true);

    const delayDebounce = setTimeout(() => {
      fetch(`https://dummyjson.com/products/search?q=${encodeURIComponent(query)}`)
        .then((res) => res.json())
        .then((data) => {
          setResults(data.products || []);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
        });
    }, 400); // 400ms delay protects your API server from spam clicks

    return () => clearTimeout(delayDebounce); // Cleanup system if user types quickly
  }, [query]);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>🔍 Live Product Inventory Search</h2>
      
      <input
        ref={searchInputRef}
        type="text"
        placeholder="Type to search (e.g., phone, laptop)..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: '8px', width: '300px', fontSize: '16px' }}
      />

      {loading && <p>Searching database...</p>}

      {!loading && results.length > 0 && (
        <ul style={{ marginTop: '15px' }}>
          {results.map((product) => (
            <li key={product.id} style={{ margin: '5px 0' }}>
              <strong>{product.title}</strong> - \${product.price}
            </li>
          ))}
        </ul>
      )}

      {!loading && query && results.length === 0 && (
        <p style={{ color: 'gray' }}>No matching inventory found.</p>
      )}
    </div>
  );
}

export default ProductSearchEngine;
```

---

## Quick Summary Checklist
* [x] Hooks provide state and lifecycle features to functional components.
* [x] Never put hooks inside `if` blocks or loops.
* [x] Use `useState` to track changing screen data.
* [x] Use `useEffect` with an empty array `[]` for API calls on page load.
* [x] Use `useRef` to target elements or save values without re-rendering.
* [x] Use `useState` for simple values, `useReducer` for complex state trees.
* [x] Use `useMemo` to cache heavy **values/calculations**.
* [x] Use `useCallback` to cache parent **function definitions**.

