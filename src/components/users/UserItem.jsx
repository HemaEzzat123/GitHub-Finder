import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function UserItem({ user: { login, avatar_url } }) {
  return (
    <div className="flex shadow-md border rounded-lg bg-white dark:bg-gray-900 dark:shadow-slate-600 dark:text-white max-w-sm">
      <div className="flex-row items-center justify-between py-3 px-4">
        <div className="flex items-center">
          <img
            className="h-10 w-10 rounded-full"
            src={avatar_url}
            alt="avatar"
          />
          <div className="ml-3">
            <h2 className="text-gray-900 dark:text-white font-bold">{login}</h2>
            <Link
              className="opacity-40 dark:text-white  "
              to={`/user/${login}`}
            >
              View Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};
export default UserItem;
