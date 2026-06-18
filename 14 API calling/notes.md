# API Calling in React: Fetch vs Axios

## Introduction
To get data from a backend server, React developers use either the browser's built-in **Fetch API** or a popular third-party library called **Axios**. Both do the same core job (sending HTTP requests), but Axios simplifies error handling, security, and data formatting.

---

## 1. Comparing Core Syntaxes

### Option A: Native Fetch (Built-in)
Fetch requires a two-step process: first, you wait for the network request, and then you must manually unpack the stream into JSON.

```javascript
const useFetchAPI = async () => {
  try {
    const response = await fetch('https://example.com');
    
    // Manual error verification check required
    if (!response.ok) throw new Error(`HTTP Error Status: ${response.status}`);
    
    const data = await response.json(); // Step 2: Unpack stream
    console.log(data);
  } catch (err) {
    console.error(err.message);
  }
};
```

### Option B: Axios Library (Requires Installation)
Axios automatically transforms responses into JSON objects and throws an error for bad HTTP codes (like 404 or 500) automatically.

```bash
npm install axios
```
```javascript
import axios from 'axios';

const useAxiosAPI = async () => {
  try {
    // Automatically unpacks data and flags bad status responses
    const response = await axios.get('https://example.com');
    console.log(response.data); // Data is directly accessible under .data
  } catch (err) {
    console.error(err.response?.data || err.message);
  }
};
```

---

## 2. Key Differences Cheat Sheet

| Feature | `fetch()` | `axios` |
| :--- | :--- | :--- |
| **Installation** | Built-in (No install needed) | Needs `npm install axios` |
| **JSON Parsing** | Manual (`await response.json()`) | Automatic (Found in `response.data`) |
| **Error Handling**| Treats 404/500 as normal responses | Automatically throws errors for bad statuses |
| **Post Data** | Must stringify (`JSON.stringify(obj)`) | Pass plain JS objects directly |
| **Timeout Protection** | Requires complex `AbortController` setup | Simple configuration property `{ timeout: 5000 }` |

---

## 3. Real-World Example: Syncing a Product Catalog
This component shows how to fetch data using **both** methods inside a typical React architecture, handling loading states, success lists, and network errors safely.

### Implementation:
```jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Ensure npm install axios is completed

function ProductDirectory() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    // CHANGE THIS VARIABLE TO TOGGLE MODES FOR TESTING
    const useAxiosMethod = true; 

    // --- APPROACH 1: USING AXIOS ---
    const loadDataWithAxios = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://dummyjson.com');
        setItems(response.data.products); // Axios wraps output inside data key
      } catch (err) {
        setErrorMsg(err.message || "Axios network connection error occurred.");
      } finally {
        setLoading(false);
      }
    };

    // --- APPROACH 2: USING NATIVE FETCH ---
    const loadDataWithFetch = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://dummyjson.com');
        
        if (!response.ok) {
          throw new Error(`Fetch server failure code: ${response.status}`);
        }
        
        const rawJsonData = await response.json();
        setItems(rawJsonData.products);
      } catch (err) {
        setErrorMsg(err.message);
      } finally {
        setLoading(false);
      }
    };

    // Trigger selected mechanism
    if (useAxiosMethod) {
      loadDataWithAxios();
    } else {
      loadDataWithFetch();
    }
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>📦 Store Inventory Catalog</h2>
      <hr />

      {loading && <p style={{ color: '#007bff' }}>Pulling product database updates...</p>}
      
      {errorMsg && <p style={{ color: 'red', background: '#fee', padding: '10px' }}>{errorMsg}</p>}

      {!loading && !errorMsg && (
        <ul>
          {items.map((product) => (
            <li key={product.id} style={{ marginBottom: '10px' }}>
              <strong>{product.title}</strong> — \${product.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProductDirectory;
```

---

## Quick Summary Checklist
* [x] Use **Fetch** if you want to keep your project lightweight without external npm packages.
* [x] Use **Axios** for larger apps where clean error trapping and auto JSON conversion save writing code.
* [x] **POST requests** in Axios automatically convert payloads; no manual `JSON.stringify()` is required.
