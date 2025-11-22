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
[Course: 2. React 18 for Intermediate Topics > 3. Global State Management (2h) ] [ Video: #16-Managing-Application-State-with-Zustand_mp4_7min_24sec ] - Feature: Implement Counter State with Zustand

## Migrated the Counter feature from `useReducer` to Zustand for simplified state management.

Implemented Zustand to manage the counter state, demonstrating a pattern that significantly reduces boilerplate compared to the `useReducer`/Context pattern.

### Key Changes:
* **Installation:** Installed the `zustand` library.
* **Store Creation (`src/state-management/counter/store.ts`):**
    * Defined the `CounterStore` interface, outlining the state (`counter: number`) and actions (`increment: () => void`, `reset: () => void`).
    * Used the `create` function from Zustand to define the store logic.
    * Implemented state updates immutably using the `set` function within the action methods.
    * Exported the resulting custom hook, `useCounterStore`.
* **Component Refactoring (`Counter.tsx`):**
    * Removed `useReducer` and the reliance on `counterReducer`.
    * Used `useCounterStore()` to access and destructure state (`counter`) and actions (`increment`, `reset`).
    * Replaced `dispatch` calls with direct action function calls (e.g., `increment()`).
* **Shared State Access (`NavBar.tsx`):**
    * Integrated `useCounterStore()` in `NavBar.tsx` to display the current counter value, proving the store's accessibility across the component tree without requiring a Provider component.
* **Cleanup:** Deleted the redundant `src/state-management/counter/counterReducer.ts` file.

This change successfully isolates and simplifies the counter state management, providing a cleaner interface for components.


# my-github Account : 
https://github.com/avadhutFrontEnd/playground-starter