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
[Course: 2. React 18 for Intermediate Topics > 2. Fetching and Updating Data with React Query (3h) ] [ Video: #20-Creating-a-Reusable-API-Client_mp4_10min_00sec ] - feat: Create reusable, generic 'APIClient' to centralize data fetching logic

## feat: Create reusable, generic APIClient to centralize data fetching logic

**Refactor:**

* Extracted redundant Axios/fetching logic from `useTodos` and `useAddTodo` into a new **generic `APIClient<T>` class** in `services/apiClient.ts`.
* The `APIClient` uses a shared **`axiosInstance`** with a configured `baseURL` to prevent URL duplication.
* Implemented **`getAll`** and **`post`** methods as **arrow functions** to correctly preserve the `this` context for class properties like `this.endpoint`.
* Updated `useTodos` to use **`queryFn: apiClient.getAll`**.
* Updated `useAddTodo` to use **`mutationFn: apiClient.post`**.

**Fix:**

* Used **arrow function syntax** for class methods in `APIClient` to resolve the `this` context bug (where `this.endpoint` was `undefined` when methods were passed as callbacks).

**Chore:**

* Removed redundant loading state logic from **`TodoForm.tsx`** button as optimistic updates make it visually unnecessary.


# my-github Account : 
https://github.com/avadhutFrontEnd/playground-starter