import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
function Navbar({ title = "Github Finder" }) {
  return (
    <nav className="w-full mb-12 shadow-lg bg-inherit text-inherit">
      <div className="flex h-12 items-center w-[90%] mx-auto">
        <div className="flex-none px-2 mx-2">
          <FaGithub className="inline pr-2 text-3xl" />
          <Link to={"/"} className="text-lg font-bold align-middle">
            {title}
          </Link>
        </div>

        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
            <Link
              to={"/"}
              className="hover:bg-gray-200 font-bold  px-2 py-1 transition duration-300 rounded-md"
            >
              Home
            </Link>
            <Link
              to={"/about"}
              className="hover:bg-gray-200 font-bold  px-2 py-1 transition duration-300 rounded-lg"
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
