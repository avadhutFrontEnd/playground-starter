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
[Course: 2. React 18 for Intermediate Topics > 3. Global State Management (2h) ] [ Video: #8-Creating-a-Custom-Provider_mp4_2min_58sec ] - Refactor: Create Custom AuthProvider Component

## Encapsulated Auth State and Context Provider into a Custom Component for modularity.

Refactored the `App.tsx` component to create a custom **`AuthProvider`** component. This component encapsulates the authentication state logic (`useReducer`) and the context provision (`AuthContext.Provider`), resulting in cleaner, more modular, and reusable code.

### Key Changes:
* **Created `AuthProvider.tsx`:**
    * Defined the `AuthProvider` functional component.
    * Added an interface for **`Props`** to accept **`children: ReactNode`**, allowing the provider to wrap other components.
    * Moved the authentication state logic (`const [user, dispatch] = useReducer(authReducer, "")`) from `App.tsx` into this new component.
    * Renamed the dispatch function back to **`dispatch`** as it is the only one in this component, making the code cleaner.
    * Returned the **`<AuthContext.Provider>`** and rendered `{children}` inside it.
* **Simplified `App.tsx`:**
    * Replaced the explicit `<AuthContext.Provider>` nesting in `App.tsx` with the cleaner **`<AuthProvider>`** component.
    * Removed the need for uniquely naming the authentication dispatch function (e.g., `authDispatch`) in `App.tsx`.

This pattern improves the separation of concerns, making the authentication logic easily movable or reusable in different applications.



# my-github Account : 
https://github.com/avadhutFrontEnd/playground-starter