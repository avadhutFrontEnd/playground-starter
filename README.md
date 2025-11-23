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
[Course: 2. React 18 for Intermediate Topics > 4. Routing with React Router (2h) ] [ Video: #9-Handling-Errors_mp4_3min_22sec ] - Feature: Implement Custom Error and Not-Found Pages

## Implemented robust error handling for both application-thrown errors and invalid URLs using React Router's `errorElement`.

This centralizes error reporting and provides a better user experience than the default browser error page.

---

### Key Changes:

1.  ### Defined Custom Error Component (`src/routing/ErrorPage.tsx`)
    * Created the `<ErrorPage />` component to render a user-friendly error message.
    * Used the **`useRouteError`** hook to access the error object thrown by the application or by the router (e.g., for 404 Not Found).
    * Used the **`isRouteErrorResponse`** utility function to differentiate between:
        * **Router Errors (404/Invalid Path):** If `isRouteErrorResponse(error)` is true, display **"Invalid page"**.
        * **Application Errors:** Otherwise, display **"Unexpected error"**.

2.  ### Configured Global Error Boundary (`src/routing/routes.tsx`)
    * The **`errorElement`** property was set on the **root route** (`path: "/"`) in the `createBrowserRouter` configuration:
        ```typescript
        {
          path: "/",
          element: <Layout />,
          errorElement: <ErrorPage />, // Catches all errors and 404s in child routes
          children: [ /* ... */ ]
        }
        ```
    * By setting the `errorElement` on the parent (root) route, it acts as an **error boundary** that catches errors thrown in any of its nested child routes, including when no child route matches the URL (404).

3.  ### Error Logging
    * The `useRouteError` hook was utilized in `<ErrorPage />` to log the caught error to the console, allowing developers to inspect the issue. In a production application, this hook would be used to report errors to a dedicated service like **Sentry**.

This setup successfully replaces the generic browser error page with a helpful, context-aware custom error view.

---

The next section will likely focus on addressing issues related to search and linking when using nested routes.

Would you like to continue with the next lesson on building relative links?


# my-github Account : 
https://github.com/avadhutFrontEnd/playground-starter