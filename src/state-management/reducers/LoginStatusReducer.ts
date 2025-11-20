interface Action {
  type: "LOGIN" | "LOGOUT";
  user?: string;
}

const LoginStatusReducer = (user: string, action: Action): string => {
  switch (action.type) {
    case "LOGIN":
      return action.user ? action.user : "";
    case "LOGOUT":
      return "";
  }
};

export default LoginStatusReducer;