import React from "react";
import PropTypes from "prop-types";
import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from "react-icons/fa";
function RepoItems({ repo }) {
  const {
    name,
    description,
    html_url,
    forks,
    open_issues,
    watchers_count,
    stargazers_count,
  } = repo;

  return (
    <div className="mb-2 rounded-md bg-white transition duration-300 hover:bg-gray-200  shadow-md">
      <div className="p-5">
        <h3 className="flex items-center space-x-4">
          <a
            href={html_url}
            target="_blank"
            className="font-semibold"
            rel="noopener noreferrer"
          >
            <FaLink className="text-pink-500 inline-block mr-1" /> {name}
          </a>
        </h3>
        <p className="mb-3 opacity-50 truncate ">{description}</p>
        <div className="flex space-x-4">
          <div className="flex items-center bg-gray-200 text-blue-700 w-16 justify-center rounded-lg mt-2">
            <FaEye className="mr-2" /> {watchers_count}
          </div>
          <div className="flex items-center bg-gray-200 text-green-500 w-16 justify-center rounded-lg mt-2">
            <FaStar className="mr-2" /> {stargazers_count}
          </div>
          <div className="flex items-center bg-gray-200 text-red-700 w-16 justify-center rounded-lg mt-2">
            <FaInfo className="mr-2" /> {open_issues}
          </div>
          <div className="flex items-center bg-gray-200 text-yellow-500 w-16 justify-center rounded-lg mt-2">
            <FaUtensils className="mr-2" /> {forks}
          </div>
        </div>
      </div>
    </div>
  );
}
RepoItems.propTypes = {
  repo: PropTypes.object.isRequired,
};
export default RepoItems;
