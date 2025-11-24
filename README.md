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
[Course: 2. React 18 for Intermediate Topics > 4. Routing with React Router (2h) ] [ Video: #10-Private-Routes_mp4_2min_59sec ] - Feature: Implement Basic Private Route Mechanism

## Implemented a basic "private route" mechanism to restrict access to the `/users` page to authenticated users.

This was achieved using React Router's declarative `<Navigate />` component to handle redirection during the render phase without causing side effects.

---

### Key Changes:

1.  ### Implemented Authentication Check (`src/routing/UsersPage.tsx`)
    * The custom **`useAuth`** hook was called to determine the current user's authentication status.
    * If the user is **not logged in (`!user`)**, a redirection is immediately triggered.

2.  ### Used Declarative Redirection
    * The standard imperative `useNavigate()` hook cannot be called during rendering because it causes a side effect (updating the URL).
    * Instead, the **`<Navigate />` component** (a declarative wrapper) was returned to perform the redirection:
        ```typescript
        import { Navigate, Outlet } from "react-router-dom";
        // ...
        if (!user) return <Navigate to="/login" />;
        ```
    * The component instructs the router to change the location to `/login` *before* the component finishes rendering its protected content.

3.  ### Defined Login Route (`src/routing/routes.tsx`)
    * A new route for the login page was defined in the router configuration:
        ```typescript
        { path: "/login", element: <LoginPage /> },
        ```

This method successfully protects the `UsersPage` by redirecting unauthenticated visitors to the login page. However, it was noted that this approach is not easily **scalable** for protecting multiple routes, which will be addressed in the next lesson.

---

The next lesson will introduce a more scalable approach to handling private routes using a dedicated wrapper component and nested routes.

Would you like to move on to the next lesson on scaling private routes?


# my-github Account : 
https://github.com/avadhutFrontEnd/playground-starter