import React from "react";
import PropTypes from "prop-types";
import RepoItems from "./RepoItems";
function RepoList({ repos }) {
  return (
    <div className="rounded-lg  shadow-lg">
      <div className="">
        <h2 className="text-3xl font-bold my-4">Latest Repositories</h2>
        {repos.map((repo) => (
          <RepoItems repo={repo} key={repo.id} />
        ))}
      </div>
    </div>
  );
}

RepoList.propTypes = {
  repos: PropTypes.array.isRequired,
};
export default RepoList;
