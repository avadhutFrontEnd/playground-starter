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
[Course: 2. React 18 for Intermediate Topics > 4. Routing with React Router (2h) ] [ Video: #11-Layout-Routes_mp4_2min_08sec ] - Refactor: Create Scalable Private Routes using Layout Routes

## Refactored the Private Route logic into a central **Layout Route** for improved scalability and separation of concerns.

This approach eliminates the need to duplicate authentication logic in every protected component.

---

### Key Concept: Layout Routes

A **Layout Route** is a route object in the configuration that is used **solely for grouping other routes** to enforce common **layouts** or **business rules** (like authentication checks).

* Layout Routes typically **do not have a `path`** property.
* They use the `element` property to render a wrapper component.
* The actual routes to be grouped are placed in the `children` array.

### Implementation Steps

1.  ### Created `<PrivateRoutes />` Component (`src/routing/PrivateRoutes.tsx`)
    * This component now holds the entire authentication check and redirection logic, which was extracted from `UsersPage.tsx`.
    * If the user is unauthenticated, it returns the `<Navigate />` component.
    * If the user is authenticated, it returns the **`<Outlet />`**, which is where the protected child route will be rendered.
        ```typescript
        const PrivateRoutes = () => {
          const { user } = useAuth();
          if (!user) return <Navigate to="/login" />;
          return <Outlet />;
        };
        ```

2.  ### Configured Layout Route (`src/routing/routes.tsx`)
    * A new top-level route object was created **without a `path`**:
        ```typescript
        {
          element: <PrivateRoutes />,
          children: [
            // Any route inside here is now protected
            {
              path: "users",
              element: <UsersPage />,
              children: [{ path: ":id", element: <UserDetail /> }],
            },
          ],
        },
        ```
    * The `users` route was moved inside the `children` array of this new private layout route. Now, any route added to this `children` array is automatically protected by the `<PrivateRoutes />` component.

3.  ### Cleaned Up Protected Component (`src/routing/UsersPage.tsx`)
    * The component was simplified by removing the `useAuth` hook and the conditional `<Navigate />` statement. It now focuses only on rendering its content.

This refactoring successfully centralizes the protection logic, making it easy to add or remove private routes in the future.

---

The final lesson in this section will cover creating relative links to make nested routes more robust against path changes.

Would you like to continue with the next lesson on building relative links?


# my-github Account : 
https://github.com/avadhutFrontEnd/playground-starter