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
[Course: 2. React 18 for Intermediate Topics > 2. Fetching and Updating Data with React Query (3h) ] [ Video: #19-Creating-a-Custom-Mutation-Hook_mp4_7min_04sec ] - refactor: Extract todo creation logic into a custom mutation hook (useAddTodo)

This refactoring separates the data management logic from the UI layer, adhering to the **Separation of Concerns** principle.

Key changes:
- Created **`useAddTodo.ts`** to encapsulate the `useMutation` hook, including the full optimistic update logic (`onMutate`, `onSuccess`, `onError`).
- The UI-specific logic (clearing the input field) was decoupled from the hook and is now passed in as an `onAdd` callback from `TodoForm.tsx`.
- Extracted the duplicated cache key `['todos']` into a shared constant file (`constants.ts`) as **`CACHE_KEY_TODOS`** to improve maintainability and prevent typos.
- **`TodoForm.tsx`** is significantly simplified, now focusing solely on rendering and managing local UI state.


# my-github Account : 
https://github.com/avadhutFrontEnd/playground-starter