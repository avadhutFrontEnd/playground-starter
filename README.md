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
[Course: 2. React 18 for Intermediate Topics > 3. Global State Management (2h) ] [ Video: #4-Exercise-Working-with-Reducers_mp4_4min_37sec ] - Refactor: Implement Auth Reducer for LoginStatus

## Consolidate authentication state logic using `useReducer`

Refactored the `LoginStatus` component to centralize its state management (login/logout) into a dedicated reducer, applying the pattern of using **discriminated unions for actions with different payloads**.

### Key Changes:
* **Created `authReducer.ts`:**
    * Defined state type as `string` (for the username).
    * Defined two distinct action interfaces: **`LoginAction`** (type `"LOGIN"`, requires `username: string`) and **`LogoutAction`** (type `"LOGOUT"`, requires no payload).
    * Created **`AuthAction`** as a union type (`LoginAction | LogoutAction`).
    * Implemented the `authReducer` logic using `if` statements to handle state transitions (setting username on LOGIN, clearing username on LOGOUT).
* **Refactor `LoginStatus.tsx`:**
    * Replaced `useState` with **`useReducer(authReducer, "")`**.
    * Updated the "Login" button to dispatch a **`LOGIN`** action with the `username` payload.
    * Updated the "Logout" link to dispatch a simple **`LOGOUT`** action.

This moves the authentication state logic outside of the component, achieving better separation of concerns and maintaining type safety.



# my-github Account : 
https://github.com/avadhutFrontEnd/playground-starter