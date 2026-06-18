# Local Storage in React Documentation

## What is Local Storage?
* **LocalStorage** is a built-in web browser API that allows you to store key-value data directly in the user's browser.
* 💾 **Persistent Data:** Data saved here does not disappear when the browser tab is closed or when the page is refreshed.
* 🛠️ **Strings Only:** LocalStorage can only store data as **strings**. To store objects or arrays, you must convert them to a string format first.
* 📏 **Storage Limit:** You can save up to roughly 5MB of text data per website origin.

---

## 1. Core Web API Syntax
You do not need to install anything to use LocalStorage; it is a global browser object.

```javascript
// 1. Saving data (Create / Update)
localStorage.setItem('username', 'Hassan');

// 2. Reading data (Read)
const user = localStorage.getItem('username'); // Returns: 'Hassan'

// 3. Deleting a specific item (Delete)
localStorage.removeItem('username');

// 4. Clearing everything saved by your website
localStorage.clear();
```

---

## 2. Handling Arrays and Objects (JSON Parsing)
Because LocalStorage only stores plain text strings, you must serialize data using JSON methods when dealing with complex data structures.

### Saving an Object:
```javascript
const userProfile = { id: 101, name: 'Ali', role: 'Admin' };

// Convert the object into a JSON string format before saving
localStorage.setItem('user', JSON.stringify(userProfile));
```

### Reading an Object:
```javascript
const savedData = localStorage.getItem('user');

// Convert the string back into a working JavaScript object
const parsedUser = JSON.parse(savedData);
console.log(parsedUser.name); // Output: Ali
```

---

## 3. Real-World Example: Persistent Dark/Light Theme Selector
This practical React example features a dark mode toggle engine. It reads the user's preferred layout settings from `localStorage` right when the application mounts, updates browser view states dynamically, and saves new user configurations automatically so the setting stays fixed on the next visit.

```jsx
import React, { useState, useEffect } from 'react';

function ThemeSettingsDashboard() {
  // 1. Lazy state initialization: Load saved theme from localStorage on initial boot up
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('app-theme');
    return savedTheme ? savedTheme : 'light'; // Fallback to 'light' mode if empty
  });

  // 2. Automatically sync and save theme adjustments to local storage whenever state updates
  useEffect(() => {
    localStorage.setItem('app-theme', theme);
    
    // Dynamically apply visual backgrounds directly to the app viewport container
    if (theme === 'dark') {
      document.body.style.backgroundColor = '#1e1e1e';
      document.body.style.color = '#ffffff';
    } else {
      document.body.style.backgroundColor = '#ffffff';
      document.body.style.color = '#000000';
    }
  }, [theme]); // Re-runs layout configurations precisely when theme state mutates

  const toggleThemeMode = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial, sans-serif' }}>
      <h1>⚙️ Settings panel</h1>
      <p>Current Active Layout Profile: <strong>{theme.toUpperCase()} MODE</strong></p>
      
      <button 
        onClick={toggleThemeMode} 
        style={{
          padding: '10px 16px',
          fontSize: '15px',
          cursor: 'pointer',
          border: '1px solid #ccc',
          borderRadius: '4px',
          background: theme === 'dark' ? '#fff' : '#333',
          color: theme === 'dark' ? '#000' : '#fff'
        }}
      >
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Layout
      </button>
    </div>
  );
}

export default ThemeSettingsDashboard;
```

---

## Quick Summary Checklist
* [x] **Strings Only:** Always stringify (`JSON.stringify`) complex entries when saving.
* [x] **Data Recovery:** Always parse (`JSON.parse`) incoming values to restore active object layers.
* [x] **Safe Initialization:** Pass a callback function inside `useState` to load persistent states instantly on mount.
* [x] **Cleanup Care:** Use `localStorage.removeItem()` instead of `.clear()` to avoid purging unrelated session keys.
