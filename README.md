# Playground Start

This is the starter code for the playground project we use in part 2 of my React course. 

## Getting Started

To get started, follow these steps:

1. Clone this repository to your local machine.
2. Run `npm install` to install the required dependencies.
3. Run `npm run dev` to start the web server. 

## About the Course

This repository belongs to part 2 of my React course covering intermediate-level topics. 

- Fetching and updating data with React Query
- All about reducers, context, and providers
- Managing application state with Zustand
- Routing with React Router 

You can find the course at https://codewithmosh.com

# Commit message format : 
[Course: 2. React 18 for Intermediate Topics > 4. Routing with React Router (2h) ] [ Video: #6-Nested-Routes_mp4_3min_23sec ] - Feature: Implement Persistent Layout and Nested Routes

## Implemented a persistent layout using Nested Routes to ensure common components (like the NavBar) are displayed across multiple pages.

This refactoring utilizes the **`<Outlet />`** component and the `children` property in the route configuration to define a master layout for the application.

---

### Key Changes:

1.  ### Created Layout Component (`src/routing/Layout.tsx`)
    * Introduced the `<Layout />` component which contains the common structural elements:
        * The **`<NavBar />`** component.
        * The **`<Outlet />`** component, which acts as a placeholder. 

    * **`<Outlet />` Function:** At runtime, the content of the matched child route (e.g., `<HomePage />` or `<UserListPage />`) is rendered exactly where the `<Outlet />` component is placed.

2.  ### Configured Nested Routes (`src/routing/routes.tsx`)
    * The main route path (`/`) was set to render the `<Layout />` component.
    * All previously defined routes (`/`, `/users`, `/contact`, `/users/:id`) were moved into the `children` array of the layout route.
    * **Path Adjustment:** The paths of the child routes were made **relative** to the parent path (`/`), so the leading forward slash was removed (e.g., `/users` became `users`).
    * **Index Route:** The root child route was explicitly defined as the default route to render when the parent path is matched, using **`index: true`**:
        ```typescript
        { index: true, element: <HomePage /> },
        ```
    * The final structure ensures the `Layout` always renders, and its children replace the `<Outlet />`.

3.  ### Updated Navigation Links (`src/routing/NavBar.tsx`)
    * The standard HTML `<a>` tags within the `NavBar` were replaced with React Router's **`<Link />`** components to ensure fast, client-side navigation between the pages:
        ```tsx
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/users" className="nav-link">Users</Link>
        ```

---

The application now maintains a consistent `NavBar` across the Home, User List, and User Detail pages.

The next step will likely cover handling potential errors that arise during routing, such as when a user navigates to an undefined URL.

Would you like to proceed with the next lesson on handling errors in routing?


# my-github Account : 
https://github.com/avadhutFrontEnd/playground-starter