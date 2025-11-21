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
[Course: 2. React 18 for Intermediate Topics > 3. Global State Management (2h) ] [ Video: #11-Organizing-Code-for-Scalability-and-Maintainability_mp4_9min_37sec ] - Refactor: Organize Task Modules and Hide Implementation Details

## Consolidated task-related components into a single package and refined the public interface for better scalability.

Refactored the task state management code by grouping all related building blocks (Provider, Context, Reducer, Hook, and Component) into a **single `tasks` directory/module** to enhance modularity and maintainability. Implemented the principle of **hiding implementation details** by exposing only necessary public components.

### Key Changes:
* **Created `tasks` Module:** Created the `src/state-management/tasks` folder and moved `TaskList.tsx`, `TasksProvider.tsx`, `tasksContext.ts`, and `tasksReducer.ts` into it.
* **Encapsulated Reducer Logic (Hiding Implementation):**
    * **Merged `tasksReducer.ts`** content (interfaces, types, and the reducer function) directly **into `TasksProvider.tsx`**.
    * Deleted the separate `tasksReducer.ts` file, making the reducer logic an internal implementation detail of the provider.
* **Eliminated Custom Hook:**
    * The `useTasks` custom hook was only used in `TaskList.tsx`. The simple `useContext(TasksContext)` logic was moved directly into `TaskList.tsx`.
    * Deleted the separate `useTasks.ts` file.
* **Defined Public Interface (`index.ts`):**
    * Created **`src/state-management/tasks/index.ts`** to define the module's public contract.
    * Exported only the consumer-facing components: `TasksProvider` and `TaskList`.
* **Updated Imports:**
    * Updated imports across the application (e.g., `App.tsx`, `TaskList.tsx`, and `tasksContext.ts`) to use the new module paths and structure.
    * The **`tasksContext.ts`** now imports `Task` and `TaskAction` types from the relative path of **`TasksProvider.tsx`**.
* **Simplified `App.tsx`:** The imports of `TasksProvider` and `TaskList` now target the module index: `import { TasksProvider, TaskList } from "./state-management/tasks"`.

This structure hides the complex state management internals (reducer, context, etc.) from consumers, ensuring future changes to the state implementation won't break external components.

### Remaining Build Errors Note:
The remaining build errors relate to the `useAddTodo.ts` file and TypeScript implicit `any` types, indicating issues with the **React Query setup (Todo module)** that were not addressed in the current video lesson. These will need to be resolved when working on the `todo` service implementation.


# my-github Account : 
https://github.com/avadhutFrontEnd/playground-starter