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
[Course: 2. React 18 for Intermediate Topics > 2. Fetching and Updating Data with React Query (3h) ] [ Video: #18-Optimistic-Updates_mp4_7min_48sec ] - feat: Implement optimistic updates for adding a new Todo

Enhances user experience by optimistically updating the UI immediately upon adding a new Todo using `onMutate` to set the query cache.

This commit includes:
- Adding `onMutate` to perform an instant UI update and capture the previous state (`previousTodos`) in a returned context object.
- Defining a generic type for the mutation context (`AddTodoContext`) to properly type the context object.
- Handling the success scenario in `onSuccess` by replacing the optimistic Todo with the actual data (including ID) returned from the backend.
- Implementing error handling in `onError` to roll back the optimistic change by restoring the previous Todo list from the context.


# my-github Account : 
https://github.com/avadhutFrontEnd/playground-starter