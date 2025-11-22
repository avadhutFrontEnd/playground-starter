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
[Course: 2. React 18 for Intermediate Topics > 3. Global State Management (2h) ] [ Video: #18-Preventing-Unnecessary-Renders-with-Selectors_mp4_2min_42sec ] - Feature: Prevent Unnecessary Renders using Zustand Selectors

## Optimized component rendering by using Zustand selectors.

This lesson demonstrated how to use **selectors** (a function passed to the store hook) to specify exactly which piece of state a component is dependent on, preventing unnecessary re-renders when unrelated state changes.

---

### Key Changes:

* **Updated `store.ts` (`counter` module):**
    * Added a new state property, **`max: number`**, to the `CounterStore` interface and initialized it to `5`.
    * Modified the **`reset`** action (for demonstration purposes) to update *only* the `max` property to `10`: `reset: () => set(() => ({ max: 10 }))`.
    * The store now contains two independent pieces of state (`counter` and `max`) that can be updated separately.
* **Implemented Selector (`NavBar.tsx`):**
    * In `NavBar.tsx`, the `useCounterStore` hook call was modified to include a **selector function**:
        ```typescript
        const counter = useCounterStore((s) => s.counter);
        ```
    * The selector `(s) => s.counter` explicitly tells Zustand that this component only needs and should only re-render if the **`counter`** property changes.
* **Result:**
    * When the counter is incremented (updating `counter`), the `NavBar` re-renders.
    * When the counter is reset (updating `max`), the `NavBar` does **not** re-render, effectively preventing unnecessary updates.

This technique is crucial for optimizing performance in large applications by ensuring components only react to relevant state changes.

---

The next content section appears to be related to the `todoService` for API calls and addressing the remaining React Query/Todo TypeScript errors.

Would you like to continue with the content for the Todo service setup?


# my-github Account : 
https://github.com/avadhutFrontEnd/playground-starter