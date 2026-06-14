# React Props Documentation

## What are Props?
* **Props** stands for properties.
* They are used to pass data from a **Parent component** to a **Child component**.
* Props are **read-only** (immutable), meaning a child component cannot modify the props it receives.

---

## 1. Basic Syntax
Here is how you pass and receive a simple string prop.

### Parent Component (`App.jsx`)
```jsx
import Profile from './Profile';

function App() {
  return (
    <div>
      <Profile name="Hassan" city="Abbottabad" />
    </div>
  );
}

export default App;
```

### Child Component (`Profile.jsx`)
```jsx
function Profile(props) {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <p>City: {props.city}</p>
    </div>
  );
}

export default Profile;
```

---

## 2. Destructuring Props
Instead of writing `props.name` everywhere, you can destructure the variables directly inside the function arguments.

```jsx
function Profile({ name, city }) {
  return (
    <div>
      <h2>Name: {name}</h2>
      <p>City: {city}</p>
    </div>
  );
}
```

---

## 3. Passing Different Data Types
Props can accept any JavaScript data type, including strings, numbers, booleans, arrays, objects, and functions.

```jsx
<User 
  name="Hassan"                       // String
  age={25}                         // Number
  isLoggedIn={true}                // Boolean
  skills={["React", "Node.js"]}    // Array
  info={{ role: "Developer" }}     // Object
  handleClick={showAlert}          // Function
/>
```

---

## 4. Default Props
If a parent component forgets to pass a certain prop, you can set a fallback/default value.

```jsx
function Button({ text = "Click Me", color = "blue" }) {
  return <button style={{ backgroundColor: color }}>{text}</button>;
}

// If used as <Button />, it will show a blue button with text "Click Me"
```

---

## 5. Children Prop (`props.children`)
The `children` prop is a special prop used to pass HTML elements or other components inside a component's opening and closing tags.

### Parent Component
```jsx
<Card>
  <h3>Special Offer</h3>
  <p>Get 50% off on your first purchase!</p>
</Card>
```

### Child Component
```jsx
function Card({ children }) {
  return (
    <div className="card-box">
      {children} {/* This renders everything written inside <Card>...</Card> */}
    </div>
  );
}
```

---

## Quick Summary Checklist
* [x] Props flow **downwards** (Parent to Child).
* [x] Child **cannot change** props values directly.
* [x] Use **destructuring** for cleaner code.
* [x] Use **default values** to prevent crashes from missing data.
