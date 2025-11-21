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
[Course: 2. React 18 for Intermediate Topics > 3. Global State Management (2h) ] [ Video: #6-Exercise-Working-with-Context_mp4_4min_24sec ] - Feature: Share Authentication State using React Context

## Implemented Auth Context to share user status and dispatch function globally.

Refactored the local authentication state from `LoginStatus.tsx` to `App.tsx` and created a new **Auth Context** to share the current user (`user`) and the dispatch function (`authDispatch`) with the entire component tree, demonstrating how to use multiple independent contexts.

### Key Changes:
* **Lifted Auth State (`App.tsx`):**
    * Moved `const [user, dispatch] = useReducer(authReducer, "")` from `LoginStatus.tsx` to `App.tsx`.
    * Renamed dispatch functions to **`tasksDispatch`** and **`authDispatch`** to avoid naming conflicts.
* **Created `authContext.ts`:**
    * Defined the context shape using **`AuthContextType`** (containing `user: string` and `dispatch: Dispatch<AuthAction>`).
    * Exported the **`AuthAction`** type from `authReducer.ts` to be used in the context definition.
    * Created the context instance: `AuthContext`.
* **Provided Context (`App.tsx`):**
    * Wrapped the component tree with a new **`<AuthContext.Provider>`** (nested around the `TasksContext.Provider`).
    * Passed the state and dispatch: `value={{ user, dispatch: authDispatch }}`.
* **Consumed Context:**
    * **`LoginStatus.tsx`:** Replaced local `useReducer` with **`useContext(AuthContext)`** to access `user` and `dispatch` for login/logout actions.
    * **`TaskList.tsx`:** Used **`useContext(AuthContext)`** to access the `user` and render their name, verifying the state is accessible deeper in the tree.



# my-github Account : 
https://github.com/avadhutFrontEnd/playground-starter