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
[Course: 2. React 18 for Intermediate Topics > 4. Routing with React Router (2h) ] [ Video: #5-Getting-Data-about-the-Current-Route_mp4_2min_57sec ] - Feature: Access Current Route Data using React Router Hooks

## Implemented React Router hooks (`useParams`, `useSearchParams`, `useLocation`) to extract data and metadata about the current URL.

This feature allows components to be fully dynamic, reading route parameters and query strings to render specific content.

---

### Key React Router Hooks

1.  ### `useParams` (Access Route Parameters)
    * **Purpose:** Extracts values from **dynamic segments** defined in the route path (e.g., `:id` in `/users/:id`).
    * **Returns:** An object where keys are the parameter names (e.g., `id`).
    * **Note:** All parameter values are returned as **strings** and must be parsed (e.g., to an integer) if needed for fetching or computation.
    * **Implementation (`UserDetailPage.tsx`):**
        ```typescript
        const params = useParams();
        // console.log(params.id); // Output: '3'
        ```

2.  ### `useSearchParams` (Access & Update Query Strings)
    * **Purpose:** Accesses and provides a function to update the URL's **query string** (e.g., `?name=Alice&age=25`).
    * **Returns:** An array containing:
        1.  A `URLSearchParams` object (`searchParams`) for reading values (e.g., `searchParams.get("name")`).
        2.  A function (`setSearchParams`) for updating the query string.
    * **Usage Caution:** The `setSearchParams` function should only be called inside **event handlers** or **effects** to maintain component purity.
    * **Implementation (`UserDetailPage.tsx`):**
        ```typescript
        const [searchParams, setSearchParams] = useSearchParams();
        // console.log(searchParams.get("name")); // Output: 'Alice'
        ```

3.  ### `useLocation` (Access Current Location Metadata)
    * **Purpose:** Provides an object containing detailed metadata about the current URL.
    * **Returns:** A `location` object with properties like:
        * **`pathname`**: The path part of the URL (e.g., `/users/3`).
        * **`search`**: The raw query string (e.g., `?name=Alice&age=25`).
    * **Implementation (`UserDetailPage.tsx`):**
        ```typescript
        const location = useLocation();
        // console.log(location.pathname); 
        ```

These three hooks provide complete control over reading and interacting with the current URL state within any component.

---

The next step is to address the application's layout, ensuring common elements like the navigation bar and footer appear consistently across all new routes.

Would you like to continue with the next lesson on creating a persistent layout?


# my-github Account : 
https://github.com/avadhutFrontEnd/playground-starter