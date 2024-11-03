import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

function Navbar({ title = "Github Finder" }) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  const toggleDarkMode = () => {
    setDark(!dark);
  };

  return (
    <nav className="w-full mb-12 shadow-lg dark:shadow-slate-600 bg-gray-100 dark:bg-black text-gray-800 dark:text-gray-100">
      <div className="flex h-12 items-center w-[90%] mx-auto">
        <div className="flex-none px-2 mx-2">
          <FaGithub className="inline pr-2 text-3xl" />
          <Link to="/" className="text-lg font-bold align-middle">
            {title}
          </Link>
        </div>

        <div className="flex-1 px-2 mx-2">
          <div className="flex items-center justify-end">
            <label className="flex items-center cursor-pointer mr-4">
              <input
                type="checkbox"
                checked={dark}
                onChange={toggleDarkMode}
                className="hidden"
              />
              <div className="w-10 h-5  bg-gray-300 dark:bg-gray-600 rounded-full p-1 relative">
                <div
                  className={`w-4 h-4 absolute top-[2.4px]  bg-white dark:bg-black  rounded-full shadow-md transform transition-transform ${
                    dark ? "translate-x-4 " : ""
                  }`}
                ></div>
              </div>
            </label>

            <Link
              to="/"
              className="hover:bg-gray-200 dark:hover:bg-gray-700 font-bold px-2 py-1 transition duration-300 rounded-md"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hover:bg-gray-200 dark:hover:bg-gray-700 font-bold px-2 py-1 transition duration-300 rounded-lg"
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
};

export default Navbar;
