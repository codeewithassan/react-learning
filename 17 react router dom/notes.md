# React Router DOM v6 Documentation

## What is React Router DOM?
* React Router DOM is the standard library for routing in React web applications.
* 🌐 **Client-Side Routing:** It allows your app to update the URL and change views without reloading the page.
* It enables a smooth, single-page application (SPA) user experience.

---

## 1. Installation
Install the package using your preferred package manager:
```bash
npm install react-router-dom
```

---

## 2. Basic Setup (Modern Code Layout)
Wrap your application using `BrowserRouter`, define your paths with `Route`, and render them inside a `Routes` container.

```jsx
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// 1. Define placeholder components
const Home = () => <h2>🏠 Home Page</h2>;
const About = () => <h2>ℹ️ About Page</h2>;
const NotFound = () => <h2>⚠️ 404 - Page Not Found</h2>;

function App() {
  return (
    <BrowserRouter>
      {/* 2. Navigation Bar (Replaces standard HTML anchor tags) */}
      <nav style={{ padding: '10px', background: '#eee' }}>
        <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
        <Link to="/about">About</Link>
      </nav>

      {/* 3. Route Configuration Router Engine */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Catch-all route for unmatched paths */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

---

## 3. Dynamic Routing & URL Parameters
Use `:` syntax to create dynamic URLs, and extract those variables inside components using the `useParams` hook.

### The Route Definition:
```jsx
<Route path="/profile/:username" element={<UserProfile />} />
```

### The Component Implementation:
```jsx
import { useParams } from 'react-router-dom';

function UserProfile() {
  // Extract 'username' parameter directly from the current URL
  const { username } = useParams();

  return (
    <div>
      <h2>User Profile Dashboard</h2>
      <p>Now viewing details for user: <strong>{username}</strong></p>
    </div>
  );
}
```

---

## 4. Programmatic Navigation (`useNavigate`)
Sometimes you need to redirect users automatically, like moving to a dashboard after a form login button is clicked. Use the `useNavigate` hook for this.

```jsx
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // 1. Perform auth validations here...
    console.log("Logged in successfully!");

    // 2. Redirect programmatically
    navigate('/dashboard');
  };

  return (
    <div>
      <h3>Login Screen</h3>
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
}
```

---

## 5. Protected Routes Architecture
Secure your application pages by building a custom wrapper route that checks for authentication before rendering content.

```jsx
import { Navigate } from 'react-router-dom';

// A Wrapper layout component that restricts entry
function ProtectedRoute({ isAuthenticated, children }) {
  if (!isAuthenticated) {
    // Force user away if authentication token validation fails
    return <Navigate to="/" replace />;
  }
  return children;
}

// App configuration usage:
<Route 
  path="/dashboard" 
  element={
    <ProtectedRoute isAuthenticated={userLoggedIn}>
      <DashboardPage />
    </ProtectedRoute>
  } 
/>
```

---

## Quick Summary Checklist
* [x] **No Reloads:** Always use `<Link to="...">` instead of `<a href="...">` to prevent full browser page refreshes.
* [x] **Fallback Protection:** Keep a `<Route path="*" element={<NotFound />} />` at the bottom of your routes list.
* [x] **Parameter Traps:** Names targeted by `useParams()` must match the exact spelling defined in your `<Route path="/:name">`.
