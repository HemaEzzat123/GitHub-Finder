import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex items-center dark:bg-black dark:text-white justify-center">
      <div className="text-center  ">
        <div className="max-w-lg">
          <h1 className="text-8xl font-bold mb-8">Oops!</h1>
          <p className="text-5xl mb-8">404 - Page Not Found!</p>
          <Link
            className="text-lg hover:bg-purple-700 transition duration-300 bg-purple-500 text-white font-bold py-2 px-4 rounded flex justify-center items-center"
            to="/"
          >
            <FaHome className="mr-2" />
            Back To Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
