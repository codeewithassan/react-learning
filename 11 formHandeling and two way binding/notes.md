# React Form Handling & Two-Way Data Binding

## What is Two-Way Data Binding?
* In React, two-way data binding means synchronization between the **Component State** and the **HTML Input Field**.
* 🔄 **State to Input:** The value on the screen always displays what is saved inside the React State.
* 🔄 **Input to State:** Whenever a user types, an event handler catches the changes and updates the React State.
* These fields are called **Controlled Components** because React controls their exact data value.

---

## 1. Single Input Handling (Basic Binding)
This shows how to bind a single text field to a React state variable using the `onChange` event listener and the `value` attribute.

### Example:
```jsx
import { useState } from 'react';

function SimpleForm() {
  const [name, setName] = useState('');

  return (
    <form style={{ padding: '20px' }}>
      <label>Enter Name: </label>
      <input 
        type="text" 
        value={name} // 1. State binds to the view
        onChange={(e) => setName(e.target.value)} // 2. View updates the state
      />
      <p>Live Typing Preview: {name}</p>
    </form>
  );
}

export default SimpleForm;
```

---

## 2. Handling Multiple Inputs (Object State)
Instead of creating a separate `useState` hook for every single input field, you can manage the entire form layout using a single object state.

### Key Trick:
Use the native HTML `name` attribute on your tags to dynamically track and update the correct object keys using a single function.

```jsx
import { useState } from 'react';

function RegisterForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    role: 'developer' // Default dropdown selection
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    
    // Use the functional state updater along with the spread operator (...)
    setFormData((prevData) => ({
      ...prevData,
      [name]: value // Dynamic key assignment based on input name tag
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the browser page from refreshing on submit
    console.log("Form Submitted Successfully:", formData);
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '10px', width: '250px' }}>
      <input 
        type="text" 
        name="username" 
        placeholder="Username" 
        value={formData.username} 
        onChange={handleChange} 
      />

      <input 
        type="email" 
        name="email" 
        placeholder="Email Address" 
        value={formData.email} 
        onChange={handleChange} 
      />

      <select name="role" value={formData.role} onChange={handleChange}>
        <option value="developer">Developer</option>
        <option value="designer">Designer</option>
        <option value="manager">Manager</option>
      </select>

      <button type="submit">Submit Form</button>
    </form>
  );
}

export default RegisterForm;
```

---

## 3. Real-World Example: Signup Form with Validation & Clear Functionality
This production-ready example showcases a comprehensive user onboarding box. It handles data changes across multiple fields, runs validation rules, catches structural errors, and resets back to empty values cleanly.

```jsx
import React, { useState } from 'react';

function UserOnboardingForm() {
  // Initial empty form state pattern
  const initialFormValues = { fullName: '', userEmail: '', userPassword: '' };
  
  const [fields, setFields] = useState(initialFormValues);
  const [errors, setErrors] = useState({});
  const [successMsg, setSuccessMsg] = useState('');

  // Universal updater system
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    
    // Dynamically clear the specific error when the user begins fixing it
    if (errors[name]) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    }
  };

  // Form Validation Engine
  const validateForm = () => {
    let localErrors = {};
    if (!fields.fullName.trim()) localErrors.fullName = "Full name is required.";
    if (!fields.userEmail.includes('@')) localErrors.userEmail = "Please enter a valid email.";
    if (fields.userPassword.length < 6) localErrors.userPassword = "Password must be at least 6 characters.";
    
    setErrors(localErrors);
    return Object.keys(localErrors).length === 0; // Returns true if no errors exist
  };

  const handleFormSubmission = (e) => {
    e.preventDefault();
    setSuccessMsg('');

    if (validateForm()) {
      // Logic for posting user registration information safely to an API server
      setSuccessMsg(`Welcome aboard, ${fields.fullName}! Your registration is complete.`);
      setFields(initialFormValues); // Reset form input visual bindings cleanly
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '30px auto', padding: '20px', border: '1px solid #ddd', borderRadius: '8px', fontFamily: 'Arial' }}>
      <h2>Sign Up Account</h2>
      
      {successMsg && <p style={{ color: 'green', fontWeight: 'bold' }}>{successMsg}</p>}

      <form onSubmit={handleFormSubmission}>
        {/* Full Name Input field */}
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Full Name</label>
          <input
            type="text"
            name="fullName"
            value={fields.fullName}
            onChange={handleInputChange}
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
          {errors.fullName && <small style={{ color: 'red' }}>{errors.fullName}</small>}
        </div>

        {/* Email Input field */}
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Email Address</label>
          <input
            type="text"
            name="userEmail"
            value={fields.userEmail}
            onChange={handleInputChange}
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
          {errors.userEmail && <small style={{ color: 'red' }}>{errors.userEmail}</small>}
        </div>

        {/* Password Input field */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Password</label>
          <input
            type="password"
            name="userPassword"
            value={fields.userPassword}
            onChange={handleInputChange}
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
          {errors.userPassword && <small style={{ color: 'red' }}>{errors.userPassword}</small>}
        </div>

        <button type="submit" style={{ width: '100%', padding: '10px', background: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Create Free Account
        </button>
      </form>
    </div>
  );
}

export default UserOnboardingForm;
```

---

## Quick Summary Checklist
* [x] **Two-Way Binding:** Always match `value={state}` with an `onChange={handler}` function.
* [x] **No Page Refresh:** Use `e.preventDefault()` inside your submit listener.
* [x] **Dynamic Forms:** Provide HTML `name` tags to scale object states efficiently.
* [x] **State Updates:** Use computed keys `[e.target.name]: e.target.value` to merge fields safely.
