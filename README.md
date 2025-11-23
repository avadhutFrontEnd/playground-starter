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
[Course: 2. React 18 for Intermediate Topics > 4. Routing with React Router (2h) ] [ Video: #3-Navigation_mp4_2min_43sec ] - Feature: Implement Client-Side Navigation

## Implemented client-side navigation using React Router's `<Link />` component and the `useNavigate` hook.

This update replaces the default browser behavior (full page reload for `<a>` tags) with faster, single-page application (SPA) style navigation.

---

### Key Navigation Methods:

1.  ### Declarative Navigation (Links)
    * **Problem with `<a>`:** Using a standard HTML `<a>` tag triggers a **full page reload**, which is slow and wastes bandwidth by re-downloading the entire page HTML.
    * **Solution with `<Link />`:** The React Router **`<Link />`** component is used as a drop-in replacement for `<a>` tags.
        * It prevents the full page reload.
        * It only updates the necessary portion of the DOM, resulting in fast client-side navigation.
    * **Implementation (`src/routing/HomePage.tsx`):**
        ```tsx
        import { Link } from "react-router-dom";
        // ...
        <Link to="/users">Users</Link>
        ```

---

2.  ### Programmatic Navigation (Redirection)
    * To redirect a user based on an application event (like form submission, login success, or button clicks), the **`useNavigate`** hook is used.
    * **`useNavigate`** returns a function that can be called with the target path to trigger navigation.
    * **Implementation (`src/routing/ContactPage.tsx`):**
        * Added a new route: `{ path: "/contact", element: <ContactPage /> }`
        * Used the hook to redirect upon form submission:
            ```tsx
            import { useNavigate } from "react-router-dom";
            // ...
            const navigate = useNavigate();
            // ...
            <form onSubmit={(event) => {
              // ...
              navigate("/"); // Redirects to the home page
            }}>
            ```

---

The application now supports modern, fast navigation between the defined routes.

Would you like to continue with the next lesson on building a persistent layout for the routes?


# my-github Account : 
https://github.com/avadhutFrontEnd/playground-starter