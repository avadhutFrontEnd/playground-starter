import axios from "axios";
import { useQuery } from "@tanstack/react-query";

interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

const useTodos = () => {
  const fetchTodos = () =>
    axios
      .get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.data);

  return useQuery<Todo[], Error>({
    queryKey: ["todos"],
    queryFn: fetchTodos,
// # override the "default settings" "per query"
    staleTime: 10 * 1000,
  });
};

export default useTodos;
