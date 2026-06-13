# React Components Documentation

## What are Components?
* Components are the **building blocks** of a React application.
* They are independent, reusable pieces of UI (User Interface).
* Every React component must return **JSX** (HTML-like syntax) to be rendered on the screen.
* **Rule:** Component names must always start with a **Capital Letter** (e.g., `Header`, not `header`).

---

## 1. Functional Components
This is the modern and standard way of writing components in React using JavaScript functions.

### Example:
```jsx
function WelcomeMessage() {
  return (
    <div className="welcome-box">
      <h1>Hello, Welcome to my website!</h1>
    </div>
  );
}

export default WelcomeMessage;
```

---

## 2. Using Arrow Functions
You can also write functional components using ES6 Arrow Functions. This is very popular among developers.

```jsx
const Button = () => {
  return <button>Click Here</button>;
};

export default Button;
```

---

## 3. Nesting Components (Reusability)
You can call one component inside another component. This allows you to build complex UIs from small, simple pieces.

```jsx
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Header /> {/* Nested Child Component */}
      <main>
        <p>This is the main content area.</p>
      </main>
      <Footer /> {/* Nested Child Component */}
    </div>
  );
}

export default App;
```

---

## 4. Components with State
Components can look after their own private data using a hook called `useState`. When the state data changes, the component updates automatically on screen.

```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Counter;
```

---

## 5. Class Components (Legacy)
Before React 16.8 (Hooks), developers used ES6 classes to create components. You might see this in older projects, but you should avoid using it for modern apps.

```jsx
import React, { Component } from 'react';

class OldComponent extends Component {
  render() {
    return <h1>Hello from an old Class Component!</h1>;
  }
}

export default OldComponent;
```

---

## Quick Summary Checklist
* [x] Component names **must** start with a capital letter.
* [x] Components can be **reused** multiple times across your app.
* [x] Modern React uses **Functional Components** with Hooks.
* [x] Every component must return a **single parent element** (or use a Fragment `<>...</>`).
