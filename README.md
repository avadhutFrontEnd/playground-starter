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
[Course: 2. React 18 for Intermediate Topics > 4. Routing with React Router (2h) ] [ Video: #4-Passing-Data-with-Route-Parameters_mp4_2min_02sec ] - Feature: Implement Dynamic Routes for User Details

## Implemented dynamic routing to pass data (User ID) through the URL using route parameters.

This feature allows the application to map multiple distinct URLs (e.g., `/users/1`, `/users/2`) to a single component (`UserDetailPage`).

---

### Key Changes:

1.  ### Defined Dynamic Route (`src/routing/routes.tsx`)
    * A new route was added using a **route parameter**, indicated by a colon (`:`), to capture the User ID:
        ```typescript
        { path: "/users/:id", element: <UserDetailPage /> },
        ```
    * The parameter name is **`:id`**, which can now be extracted in the target component.
    * *(Note: In React Router v6, the order of dynamic vs. static routes is no longer important for correct matching.)*

2.  ### Created Dynamic Links (`src/routing/UserListPage.tsx`)
    * In `UserListPage.tsx`, the `<Link />` component now generates dynamic URLs using a **template literal** (`backticks`) to embed the user's ID:
        ```tsx
        <Link to={`/users/${user.id}`}>{user.name}</Link>
        ```
    * Clicking these links directs the user to the `UserDetailPage` with the specific ID included in the URL.

---

The next step is to retrieve this dynamic parameter value (`:id`) inside the `UserDetailPage` component to fetch and display the correct user information.

Would you like to move on to the next lesson, which teaches you how to read these route parameters?


# my-github Account : 
https://github.com/avadhutFrontEnd/playground-starter