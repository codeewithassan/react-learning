# Functions in React Documentation

## Introduction
In React, functions are used for almost everything: creating components, handling user interactions (like clicks), managing side effects, and transforming data.

---

## 1. Event Handler Functions
These are functions triggered by user interaction, such as clicking a button, typing in an input field, or submitting a form.

### Inline Event Handler (Arrow Function)
Best for simple, one-line operations.
```jsx
function DeleteButton() {
  return (
    <button onClick={() => console.log("Item deleted!")}>
      Delete
    </button>
  );
}
```

### Separate Event Handler Function
Best for clean, readable code when operations require multiple lines.
```jsx
function SignupForm() {
  // Function definition inside the component
  const handleRegister = () => {
    console.log("Form validated");
    console.log("Data sent to API");
  };

  return <button onClick={handleRegister}>Register</button>; // Note: Pass the reference, do not call it like handleRegister()
}
```

---

## 2. Passing Arguments to Functions
If your function needs an argument (like an item ID), you must wrap it inside an arrow function in the JSX template.

```jsx
function ProductList() {
  const addToCart = (id) => {
    console.log(`Product ${id} added to cart`);
  };

  return (
    // Correct: Wrapped in an arrow function
    <button onClick={() => addToCart(101)}>Add Item</button>
  );
}
```
*⚠️ **Warning:** Writing `onClick={addToCart(101)}` will break your app because it runs immediately when the page loads, causing an infinite render loop.*

---

## 3. Form Input Handling (Event Object)
React automatically passes an `event` object to your handler function. This is used to read user input dynamically.

```jsx
import { useState } from 'react';

function SearchBar() {
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    setQuery(event.target.value); // Grabs the text typed inside the input
  };

  return <input type="text" value={query} onChange={handleChange} />;
}
```

---

## 4. Helper Functions (Pure Functions)
If a function does not need to read or change React state, define it **outside** the component. This improves performance because the function isn't recreated every time the component renders.

```jsx
// Helper function outside the component
const calculateDiscount = (price) => {
  return price * 0.9; // 10% off
};

function ProductPrice({ originalPrice }) {
  const finalPrice = calculateDiscount(originalPrice);
  return <h2>Final Price: \${finalPrice}</h2>;
}
```

---

## 5. Functions as Props (Child to Parent Communication)
You can pass a function from a Parent component down to a Child component as a prop. This allows the child to send data back up to the parent.

### Parent Component
```jsx
import ChildButton from './ChildButton';

function Parent() {
  const alertParent = (message) => {
    alert("Message from child: " + message);
  };

  return <ChildButton onCustomClick={alertParent} />;
}
```

### Child Component
```jsx
function ChildButton({ onCustomClick }) {
  return (
    <button onClick={() => onCustomClick("Hello Dad!")}>
      Send Data to Parent
    </button>
  );
}
```

---

## Quick Summary Checklist
* [x] **Reference, Don't Invoke:** Pass `onClick={myFunc}`, not `onClick={myFunc()}`.
* [x] **Arguments require wrappers:** Use `onClick={() => myFunc(id)}` to pass data safely.
* [x] **Optimization:** Keep utility/pure functions *outside* the component body.
* [x] **Data flow:** Pass functions as props to let child components talk to parents.
