import React, { createContext, useReducer, useEffect } from "react";
import githubReducer from "./GithubReducer";
const GithubContext = createContext();
export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {
      name: "",
      avatar_url: "",
      login: "",
      bio: "",
      public_repos: 0,
      followers: 0,
      following: 0,
      html_url: "",
    },
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
