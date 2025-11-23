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
[Course: 2. React 18 for Intermediate Topics > 4. Routing with React Router (2h) ] [ Video: #7-Exercise-Working-with-Nested-Routes_mp4_3min_09sec ] - Refactor: Implement Master-Detail Layout with Nested Routes

## Implemented a Master-Detail layout for user data using a second level of Nested Routes.

This pattern allows the `UserList` (master view) to remain visible on the left while the corresponding `UserDetail` (detail view) is dynamically rendered on the right. 

---

### Key Steps and Changes:

1.  ### Created Master-Detail Layout Component (`src/routing/UsersPage.tsx`)
    * Introduced a new wrapper component, `<UsersPage />`, which renders the **Bootstrap grid structure**:
        * Left column: Renders the static **`<UserList />`**.
        * Right column: Renders the dynamic content using **`<Outlet />`**.
    * The original components were renamed for clarity: `UserListPage.tsx` became `UserList.tsx` and `UserDetailPage.tsx` became `UserDetail.tsx`.

2.  ### Configured Double-Nested Routes (`src/routing/routes.tsx`)
    * The main `/users` route was updated to render the new **`<UsersPage />`** layout.
    * The dynamic user detail route (`:id`) was nested as a **child** of the `users` route.

    * **New Route Structure:**
        ```typescript
        { 
          path: "users",
          element: <UsersPage />, // Renders UserList + Outlet
          children: [
            // This path ":id" is relative to the parent "users"
            { path: ":id", element: <UserDetail /> } 
          ],
        },
        ```
    * When the URL is `/users/1`, React Router renders: `Layout` -> `UsersPage` (with `UserList` visible) -> `UserDetail` (in the `UsersPage`'s `<Outlet />`).

3.  ### Displayed Detail Data (`src/routing/UserDetail.tsx`)
    * The `UserDetail` component was updated to render the extracted route parameter:
        ```typescript
        const params = useParams();
        return <p>User {params.id}</p>;
        ```

This structure effectively creates the desired two-column layout for displaying user information without navigating entirely away from the user list.

---

The next lesson will likely introduce error handling to catch navigation to non-existent pages.

Would you like to move on to the next lesson on handling not-found pages?


# my-github Account : 
https://github.com/avadhutFrontEnd/playground-starter