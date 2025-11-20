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
[Course: 2. React 18 for Intermediate Topics > 3. Global State Management (2h) ] [ Video: #5-Sharing-State-using-React-Context_mp4_9min_42sec ] - Feature: Share Task State using React Context

## Implement React Context to share task state and dispatch function, avoiding Prop Drilling.

Refactored the centralized task state logic from `TaskList.tsx` up to `App.tsx` and used **React Context** to share this state globally across the component tree without passing props down manually (Prop Drilling).

### Key Changes:
* **Lifted State:** Moved the `useReducer(tasksReducer, [])` logic from `TaskList.tsx` up to **`App.tsx`**.
* **Created `tasksContext.ts`:**
    * Defined the context shape using **`TasksContextType`** (containing `tasks: Task[]` and `dispatch: Dispatch<TaskAction>`).
    * Exported **`Task`** and **`TaskAction`** types from `tasksReducer.ts` for use in the context definition.
    * Created the context instance using `React.createContext<TasksContextType>({} as TasksContextType)`.
* **Provided Context (`App.tsx`):**
    * Wrapped the relevant components (`<NavBar />` and `<HomePage />`) with **`<TasksContext.Provider>`**.
    * Passed the state and dispatch function: `value={{ tasks, dispatch }}`.
* **Consumed Context:**
    * **`TaskList.tsx`:** Replaced local `useReducer` with **`useContext(TasksContext)`** to access the `tasks` array and the `dispatch` function.
    * **`NavBar.tsx`:** Used **`useContext(TasksContext)`** to access `tasks` and display `tasks.length` dynamically in the badge.

This change successfully decouples the task state from the specific components, improving modularity and maintainability.



# my-github Account : 
https://github.com/avadhutFrontEnd/playground-starter