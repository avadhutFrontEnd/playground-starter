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
[Course: 2. React 18 for Intermediate Topics > 3. Global State Management (2h) ] [ Video: #9-Creating-a-Hook-to-Access-Context_mp4_1min_24sec ] - Refactor: Create useAuth Custom Hook

## Abstracted AuthContext access into a reusable custom hook.

Created the **`useAuth`** custom hook to simplify accessing the shared authentication state and dispatch function, improving component readability and reducing direct dependency on `AuthContext`.

### Key Changes:
* **Created `useAuth.ts` hook:**
    * Defined a simple function `useAuth` that internally calls **`useContext(AuthContext)`** and returns the context value (the `{ user, dispatch }` object).
* **Refactored `LoginStatus.tsx`:**
    * Replaced the direct use of `useContext(AuthContext)` with the cleaner **`useAuth()`** call.
    * Removed the need to import `useContext` and `AuthContext` from this component, simplifying the import block.

This pattern, similar to `useQueryClient` in React Query, makes components more concise and less aware of the underlying context implementation details.



# my-github Account : 
https://github.com/avadhutFrontEnd/playground-starter