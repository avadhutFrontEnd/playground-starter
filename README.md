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
[Course: 2. React 18 for Intermediate Topics > 3. Global State Management (2h) ] [ Video: #3-Creating-Complex-Actions_mp4_6min_46sec ] - Feature: Implement useReducer for TaskList with complex actions

## Refactor TaskList state logic using `useReducer` and discriminated union types for complex actions

Applied the `useReducer` hook to the `TaskList` component to centralize the state management logic (adding and deleting tasks). This exercise demonstrates how to handle **complex actions** that require different payloads (data) using **TypeScript's discriminated union types**. 

### Key Changes:
* **Created `tasksReducer.ts`:**
    * Defined the **`Task`** interface (State type).
    * Defined two distinct action interfaces: **`AddTask`** (requires `task: Task`) and **`DeletTask`** (requires `taskId: number`).
    * Created the **`TaskAction`** type as a union of these interfaces (`AddTask | DeletTask`). This allows the TypeScript compiler to infer the correct payload property (e.g., `action.task` or `action.taskId`) based on the `action.type` string literal.
    * Implemented the `tasksReducer` function using a `switch` statement over `action.type` for clean and concise state transitions.
* **Refactor `TaskList.tsx`:**
    * Replaced `useState` with **`useReducer(tasksReducer, [])`**.
    * `ADD` action: Dispatched an action object including `type: "ADD"` and the new `task` object as the payload.
    * `DELETE` action: Dispatched an action object including `type: "DELETE"` and the `taskId` as the payload.

This approach ensures strong type safety and better organization when state updates depend on variable data payloads.



# my-github Account : 
https://github.com/avadhutFrontEnd/playground-starter