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
[Course: 2. React 18 for Intermediate Topics > 3. Global State Management (2h) ] [ Video: #19-Inspecting-Stores-with-Zustand-DevTools_mp4_2min_35sec ] - Feature: Integrate Zustand DevTools

## Integrated `simple-zustand-devtools` to enable store inspection and modification via React DevTools.

Added a development dependency to allow for easy inspection and debugging of the Zustand store state directly within the browser's React Developer Tools.

---

### Key Steps:

1.  **Installed DevTools Library:** Installed the `simple-zustand-devtools` package:
    ```bash
    npm i simple-zustand-devtools
    ```
2.  **Installed Node Types:** Installed type declarations for the Node environment to access `process.env`:
    ```bash
    npm i -D @types/node
    ```
3.  **Configured Store (`src/state-management/counter/store.ts`):**
    * Imported the **`mountStoreDevtool`** function.
    * Wrapped the initialization call within a development environment check:
        ```typescript
        if (process.env.NODE_ENV === "development")
          mountStoreDevtool("Counter Store", useCounterStore);
        ```
    * Passed the desired display name ("Counter Store") and the Zustand hook (`useCounterStore`) to the function.

### Result:

The store's current state (`counter`, `max`) and functions are now visible and editable under the **DevTool** tab within the React DevTools panel in the browser.

---

The next content section appears to be related to the `todoService` for API calls, which will involve setting up the reusable HTTP service and addressing the remaining React Query/Todo TypeScript errors.

Would you like to continue with the content for the Todo service setup?


# my-github Account : 
https://github.com/avadhutFrontEnd/playground-starter