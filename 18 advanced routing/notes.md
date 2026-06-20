# React Router DOM Advanced Routing Guide

## 1. Nested Routes & Layouts (`<Outlet />`)
Nested routing allows you to share common user interface layouts (like sidebars or navbars) across a subset of pages without re-rendering the shared structure.

### Component Layout Configuration
The `<Outlet />` component tells the parent route exactly where to render its child routes.

```jsx
import { Routes, Route, Link, Outlet } from 'react-router-dom';

// 1. Parent Shared Layout Component
function DashboardLayout() {
  return (
    <div style={{ display: 'flex' }}>
      <aside style={{ width: '200px', background: '#f0f0f0', padding: '10px' }}>
        <h3>Dashboard</h3>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Link to="/dashboard">Overview</Link>
          <Link to="/dashboard/settings">Settings</Link>
        </nav>
      </aside>
      
      <main style={{ flex: 1, padding: '20px' }}>
        {/* Child matching routes render inside this Outlet slot */}
        <Outlet />
      </main>
    </div>
  );
}

// 2. Child Components
const Overview = () => <h4>📈 Main Overview Metrics</h4>;
const Settings = () => <h4>⚙️ User Account Settings</h4>;

// 3. Application Route Setup
function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<DashboardLayout />}>
        {/* Default child path matching "/dashboard" uses index */}
        <Route index element={<Overview />} />
        {/* Matches "/dashboard/settings" */}
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}
```

---

## 2. Managing Query Parameters (`useSearchParams`)
Query parameters are string pairs appended to URLs (e.g., `/products?search=shoes&sort=price`). Use `useSearchParams` to read and modify them like React state.

```jsx
import { useSearchParams } from 'react-router-dom';

function ProductCatalog() {
  const [searchParams, setSearchParams] = useSearchParams();

  // 1. Read values from the current URL
  const query = searchParams.get('search') || '';

  const handleSearchChange = (event) => {
    const text = event.target.value;
    if (text) {
      // 2. Update the URL parameter dynamically
      setSearchParams({ search: text });
    } else {
      // Clear parameter if text box is emptied
      setSearchParams({});
    }
  };

  return (
    <div>
      <h3>Product Catalog</h3>
      <input 
        type="text" 
        value={query} 
        onChange={handleSearchChange} 
        placeholder="Filter by name..." 
      />
      <p>Active search filter: <strong>{query || 'None'}</strong></p>
    </div>
  );
}
```

---

## 3. Data Loaders & Error Boundaries (Data API Approach)
Modern React Router decoupling allows fetching data *before* rendering components using `createBrowserRouter`. This eliminates component-level loading states.

```jsx
import { 
  createBrowserRouter, 
  RouterProvider, 
  useLoaderData,
  useRouteError 
} from 'react-router-dom';

// 1. Error boundary fallback component
function ErrorFallback() {
  const error = useRouteError();
  return (
    <div style={{ color: 'red', padding: '20px' }}>
      <h3>❌ Data Load Failed</h3>
      <p>{error.statusText || error.message}</p>
    </div>
  );
}

// 2. Component using loader data
function TeamList() {
  // Access data loaded by the router engine ahead of time
  const members = useLoaderData(); 
  
  return (
    <ul>
      {members.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
}

// 3. Router setup mapping layouts, data actions, and errors together
const router = createBrowserRouter([
  {
    path: "/team",
    element: <TeamList />,
    errorElement: <ErrorFallback />,
    // Runs asynchronous data fetch concurrently while navigating
    loader: async () => {
      const res = await fetch('https://typicode.com');
      if (!res.ok) throw new Error("Could not fetch team directory");
      return res.json();
    }
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}
```

---

## 4. Route-Based Code Splitting (`React.lazy`)
Optimize initial load times by chunking page files. Only download code files when a user actually moves to that path.

```jsx
import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

// Defer component script downloads until requested
const AnalyticsReport = lazy(() => import('./pages/AnalyticsReport'));

function App() {
  return (
    <Routes>
      <Route 
        path="/analytics" 
        element={
          // Suspense supplies structural UI until network chunk arrives
          <Suspense fallback={<div>📦 Loading reporting suite modules...</div>}>
            <AnalyticsReport />
          </Suspense>
        } 
      />
    </Routes>
  );
}
```
