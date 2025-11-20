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
[Course: 2. React 18 for Intermediate Topics > 3. Global State Management (2h) ] [ Video: #2-Consolidating-State-Logic-with-a-Reducer_mp4_7min_12sec ] - Feature: Implement useReducer for Counter

## Introduced the concept of Reducers using the `Counter` component and `useReducer` hook.

Refactored the local state management of the `Counter` component from `useState` to `useReducer` to centralize and encapsulate state update logic, leading to better separation of concerns.

### Key Changes:
* **Created `counterReducer.ts`:**
    * Defined a **`counterReducer`** function that accepts `(state: number, action: Action)` and returns the new state (`number`).
    * Defined the **`Action`** interface using a union of literal types (`"INCREMENT" | "RESET"`) to ensure type-safety for action dispatching.
    * Implemented the core logic (checking `action.type` and returning `state + 1`, `0`, or `state`).
* **Refactor `Counter.tsx`:**
    * Replaced `useState` with **`useReducer(counterReducer, 0)`**.
    * Destructured the returned array into `value` (state) and **`dispatch`** (function to trigger state changes).
    * Updated button click handlers to call `dispatch({ type: 'ACTION_TYPE' })` instead of directly calling `setValue()`.
* **Update `App.tsx`:** Rendered the `Counter` component to test the functionality.

This change successfully extracts state logic out of the component, making the component "purely responsible for the markup."


# my-github Account : 
https://github.com/avadhutFrontEnd/playground-starter