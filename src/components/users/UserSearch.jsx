import React from "react";
import { useState, useContext } from "react";
import GithubContext from "../../context/github/GithubContext";
import AlertContext from "../../context/alert/AlertContext";
import { searchUsers } from "../../context/github/GithubActions";
function UserSearch() {
  const [text, setText] = useState("");
  const { users, dispatch } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter a search term", "error");
      return;
    } else {
      dispatch({ type: "SET_LOADING" });
      const users = await searchUsers(text);
      dispatch({ type: "GET_USERS", payload: users });
      setText("");
    }
  };
  return (
    <div className="grid grid-cols-1 mb-8 gap-8 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 items-baseline">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="w-full pr-40 p-2 bg-gray-200 h-10 rounded-md text-black"
                value={text}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="absolute top-0 right-0 rounded-l-none w-36 bg-black hover:bg-slate-900 transition duration-300 rounded-md text-white h-10"
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button
            onClick={() => dispatch({ type: "CLEAR_USERS" })}
            className="font-bold py-2 px-4 rounded-md hover:bg-gray-200 transition duration-300"
          >
            CLEAR
          </button>
        </div>
      )}
    </div>
  );
}

export default UserSearch;
