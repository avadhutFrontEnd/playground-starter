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
[Course: 2. React 18 for Intermediate Topics > 3. Global State Management (2h) ] [ Video: #10-Exercise-Creating-a-Provider_mp4_2min_51sec ] - Refactor: Create TasksProvider and useTasks Hook

## Modularized tasks state management using a Custom Provider and Access Hook.

Completed the refactoring of the task state by creating a reusable **`TasksProvider`** component and the accompanying **`useTasks`** custom hook. This makes the state management logic entirely encapsulated and improves the clarity of the `App` component and consumers like `TaskList`.

### Key Changes:
* **Created `TasksProvider.tsx`:**
    * Moved the task state logic (`const [tasks, dispatch] = useReducer(tasksReducer, []);`) from `App.tsx` into this new component.
    * Ensures the component accepts and renders `children: ReactNode`.
    * Returns the **`<TasksContext.Provider>`** with the state and dispatch function, fully encapsulating the task state logic.
* **Created `useTasks.ts` hook:**
    * Defined the custom hook **`useTasks`** which simplifies accessing the shared task data by calling `useContext(TasksContext)` internally.
* **Simplified `App.tsx`:**
    * Replaced the explicit `useReducer` and `TasksContext.Provider` with the clean **`<TasksProvider>`** component, leaving `App.tsx` without local state logic.
* **Refactored `TaskList.tsx`:**
    * Replaced `useContext(TasksContext)` with the concise **`useTasks()`** hook.
    * Also replaced `useContext(AuthContext)` with **`useAuth()`** for consistency.

This modularization effort leaves the `App.tsx` component clean and clearly defines two independent, reusable state domains: Authentication (`AuthProvider`) and Tasks (`TasksProvider`).


# my-github Account : 
https://github.com/avadhutFrontEnd/playground-starter