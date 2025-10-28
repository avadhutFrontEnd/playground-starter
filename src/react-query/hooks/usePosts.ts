// usePosts.ts

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const usePosts = (userId: number | undefined) =>
  useQuery<Post[], Error>({
    queryKey: userId ? ['users', userId, 'posts'] : ['posts'], // <--- This is the same pattern we follow when designing URLs for our APIs. E.g "/users/1/posts" ---> as we go from left to right, the data gets more specific.
    // "userId" is a parameter for this query.
    // Every time the value of "userId" changes, React query will fetch the posts for that user from the backend. So this is very similar to the dependency array of the "effect" hook. ---> anytime the "userId" changes, our query will get re-executed.
    queryFn: () =>
      axios
        .get("https://jsonplaceholder.typicode.com/posts", {
          params: {
            userId
          }
        })
        .then((res) => res.data),
    staleTime: 1 * 60 * 1000, //1m
  });

export default usePosts;
