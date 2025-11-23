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
[Course: 2. React 18 for Intermediate Topics > 4. Routing with React Router (2h) ] [ Video: #8-Styling-the-Active-Link_mp4_2min_20sec ] - Feature: Style Active Navigation Links using NavLink

## Implemented styling for the active navigation link using React Router's `<NavLink />` component.

This ensures the user has a visual indicator of which page they are currently viewing, a crucial part of a good user experience.

---

### Key Changes:

1.  ### Switched to `<NavLink />` (`src/routing/NavBar.tsx`)
    * The standard `<Link />` components were replaced with **`<NavLink />`** components:
        ```tsx
        <NavLink to="/" className="nav-link">Home</NavLink>
        ```
    * The key difference is that `<NavLink />` automatically adds the **`active`** class to the rendered element when its `to` prop matches the current URL.

2.  ### Customizing the Active Class (Demonstration)
    * While the default behavior worked with Bootstrap (which recognizes the `.active` class), customization is possible by passing a function to the `className` prop:
        ```typescript
        // Example of custom logic:
        className={({ isActive }) => 
          isActive ? "nav-link active" : "nav-link"
        }
        ```
    * This function receives the `isActive` boolean property, allowing developers to apply any custom class name or logic based on the link's active status.

This change ensures the navigation bar correctly highlights the current page without requiring manual state management.

---

The next lesson will likely focus on proper error handling for invalid or non-existent URLs.

Would you like to move on to the next lesson on handling not-found pages?


# my-github Account : 
https://github.com/avadhutFrontEnd/playground-starter