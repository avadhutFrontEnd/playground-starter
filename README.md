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
[Course: 2. React 18 for Intermediate Topics > 4. Routing with React Router (2h) ] [ Video: #2-Setting-Up-Routing_mp4_3min_09sec ] - Feature: Set Up Routing with React Router DOM

## Set up basic client-side routing using `react-router-dom`.

The application's structure was updated to use **`createBrowserRouter`** and **`<RouterProvider />`** to enable navigation between different pages/views.

---

### Key Steps and Changes:

* **Installation:** Installed the React Router DOM library:
    ```bash
    npm i react-router-dom@6.10.0
    ```
* **Router Definition (`src/routing/routes.tsx`):**
    * Created the router object using **`createBrowserRouter`** (the recommended modern approach).
    * Defined an array of **route objects**, each specifying a `path` and the `element` (component) to render:
        * Home Page: `{ path: "/", element: <HomePage /> }`
        * Users List: `{ path: "/users", element: <UserListPage /> }`
    * Exported the resulting `router` object.

* **Application Integration (`src/main.tsx`):**
    * The top-level `<App />` component was replaced with the **`<RouterProvider />`** component.
    * The created router object was passed to the provider via the `router` prop:
        ```tsx
        <RouterProvider router={router} />
        ```
    * This component provides the necessary context and controls to manage the application's routing state, letting React Router determine which component to render based on the current URL.

This setup establishes the fundamental structure for handling navigation across different pages in the application.

---

The next step will involve adding a component to act as the overall page layout and handling components that should be rendered across all routes.

Would you like to move on to the next lesson, which focuses on creating a persistent layout using the router?


# my-github Account : 
https://github.com/avadhutFrontEnd/playground-starter