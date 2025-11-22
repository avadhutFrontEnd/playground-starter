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
[Course: 2. React 18 for Intermediate Topics > 3. Global State Management (2h) ] [ Video: #17-Exercise-Working-with-Zustand_mp4_4min_15sec ] - Feature: Implement Authentication State with Zustand

## Migrated the Authentication feature from Context/Provider to Zustand.

Applied the Zustand pattern to the authentication state, successfully replacing all boilerplate files associated with the Context/Reducer pattern for the user status.

---

### Key Changes:

* **Store Creation (`src/state-management/auth/store.ts`):**
    * Defined the **`AuthStore`** interface (state: `user: string`, actions: `login: (username: string) => void`, `logout: () => void`).
    * Used `create<AuthStore>` to implement the store.
    * Implemented **`login`** and **`logout`** actions using the `set` function, simplifying state updates directly (e.g., `set(() => ({ user: username }))`).
    * Exported the resulting hook, **`useAuthStore`**.
* **Component Refactoring (`LoginStatus.tsx`):**
    * Replaced the `useContext` hook usage with the direct call to **`useAuthStore()`**.
    * Destructured `user`, `login`, and `logout`.
    * Replaced action dispatching with direct function calls (e.g., `login("mosh.hamedani")`).
* **Application Structure Cleanup:**
    * **Deleted** the redundant boilerplate files for this feature: `AuthProvider.tsx`, `authContext.ts`, and `useAuth.ts`.
    * Removed the **`<AuthProvider>`** component wrapper from `App.tsx` as it's no longer needed.
* **Cross-Component Access (`TaskList.tsx`):**
    * Updated `TaskList.tsx` to use **`useAuthStore()`** instead of the deprecated `useAuth()` hook for accessing the `user` property.

This refactoring further simplifies the state management in the application, leaving only the complex task state still managed by the custom Context/Provider pattern.

---

The next content section appears to be related to the `todoService` for API calls, which will involve setting up the reusable HTTP service and addressing the remaining React Query/Todo TypeScript errors.

Would you like to continue with the content for the Todo service setup?


# my-github Account : 
https://github.com/avadhutFrontEnd/playground-starter