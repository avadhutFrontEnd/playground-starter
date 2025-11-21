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
[Course: 2. React 18 for Intermediate Topics > 3. Global State Management (2h) ] [ Video: #12-Exercise-Organizing-Code_mp4_3min_09sec ] - Refactor: Organize Code by Functional Areas (Auth and Counter)

## Restructured state management code into dedicated functional modules (`auth` and `counter`) for improved scalability and organization.

Applied the organizational principle of grouping related state management building blocks by **functional area** rather than by artifact type (e.g., placing all files related to the user in an `auth` folder).

### Key Changes:
* **Created `auth` Module:**
    * Created the `src/state-management/auth` folder.
    * Moved all authentication-related files: `AuthProvider.tsx`, `LoginStatus.tsx`, `authContext.ts`, and `useAuth.ts`.
    * **Encapsulated Reducer:** The content of `authReducer.ts` (types and function) was **merged directly into `AuthProvider.tsx`**, and the redundant `authReducer.ts` file was deleted.
* **Created `counter` Module:**
    * Created the `src/state-management/counter` folder.
    * Moved the `Counter.tsx` component and `counterReducer.ts` into this folder.
    * The empty `contexts`, `hooks`, and `reducers` folders were deleted.
* **Code Cleanup and Imports:**
    * Updated all relative and absolute import paths across the application to reflect the new modular structure.
    * The `useAuth` hook was kept as a separate file within the `auth` module because it is considered a reusable public interface for consumers.
    * The `App.tsx` component is now clean, importing components directly from their functional modules (e.g., `import AuthProvider from "./state-management/auth/AuthProvider"`).

This refactoring establishes a highly scalable structure where the application is divided into independent, functional domains: `auth`, `counter`, and `tasks`.


# my-github Account : 
https://github.com/avadhutFrontEnd/playground-starter