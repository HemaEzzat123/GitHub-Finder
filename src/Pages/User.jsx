import { useEffect, useContext } from "react";
import GithubContext from "../context/github/GithubContext";
import { useParams, Link } from "react-router-dom";
import { FaCodepen, FaStore, FaUserFriends, FaUsers } from "react-icons/fa";
import Spinner from "../components/layout/Spinner";
import RepoList from "../components/repos/RepoList";
import { getUserAndRepos } from "../context/github/GithubActions";
function User() {
  const params = useParams();
  const { user, loading, repos, dispatch } = useContext(GithubContext);

  useEffect(() => {
    dispatch({ type: "SET_LOADING" });
    const getUserData = async () => {
      const userData = await getUserAndRepos(params.login);
      dispatch({ type: "GET_USER_AND_REPOS", payload: userData });
    };
    getUserData();
  }, [dispatch, params.login]);

  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="w-full mx-auto lg:w-10/12  dark:text-white">
        <div className="mb-4 ">
          <Link
            to="/"
            className="hover:bg-gray-200 dark:text-black  dark:bg-white dark:hover:bg-black dark:hover:text-white capitalize transition duration-300  text-black font-bold py-2 px-4 rounded"
          >
            Back To Search
          </Link>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8">
          <div className=" mb-6 md:mb-0">
            <div className="relative h-80 w-80 dark:shadow-slate-500 overflow-hidden shadow-lg ">
              <figure className="w-full h-full ">
                <img
                  src={avatar_url}
                  className="w-full h-full rounded-lg object-cover"
                  alt="Profile Image"
                />
              </figure>
              <div className="absolute bottom-0 left-2 p-2 justify-end">
                <h2 className="text-3xl text-white opacity-100 font-bold  z-10 mb-0">
                  {name}
                </h2>
                <p className="text-xl text-white opacity-80 z-10 flex-grow-0">
                  {login}
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-2">
            <div className="mb-6">
              <h1 className="text-3xl flex items-center dark:text-white text-black opacity-100 font-bold">
                {name}
                <div className="ml-2 mr-1 text-green-500  font-bold bg-gray-300 w-24 h-4 flex items-center justify-center  px-3 py-1 rounded capitalize text-sm ">
                  {type}
                </div>
                {!hireable && (
                  <div className="mx-1 text-blue-500 font-bold bg-gray-300 w-16 h-4 flex items-center justify-center  px-3 py-1 rounded capitalize text-sm">
                    Hireable
                  </div>
                )}
              </h1>
              <p>{bio}</p>
              <div className="mt-4 ">
                <a
                  href={html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full text-center bg-transparent border dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black border-black shadow-2xl hover:shadow-lg transition duration-300 hover:bg-black hover:text-white text-black font-bold py-2 px-4 rounded"
                >
                  Visit Github Profile
                </a>
              </div>
            </div>

            <div className="w-full rounded-lg dark:bg-black  shadow-md grid grid-cols-2 gap-4 bg-transparent ">
              {location && (
                <div className=" shadow-md dark:shadow-slate-600 px-4 py-2 rounded-lg">
                  <div className="text-sm font-semibold ">Location</div>
                  <div className="text-lg font-bold">{location}</div>
                </div>
              )}
              {blog && (
                <div className=" shadow-md dark:shadow-slate-600 px-4 py-2 rounded-lg">
                  <div className=" text-sm font-semibold">Website</div>
                  <div className="text-lg font-bold">
                    <a
                      href={`https://${blog}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {blog}
                    </a>
                  </div>
                </div>
              )}
              {twitter_username && (
                <div className="shadow-md dark:shadow-slate-600 px-4 py-2 rounded-lg">
                  <div className="text-md opacity-80">Twitter</div>
                  <div className="text-lg font-bold">
                    <a
                      href={`https://twitter.com/${twitter_username}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {twitter_username}
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="w-full py-5 mb-6 rounded-lg shadow-md ">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-7 p-5 rounded-lg">
            <div className="flex items-center justify-between shadow-md dark:shadow-slate-600 ">
              <div className="dark:shadow-slate-500">
                Followers
                <div className="text-3xl md:text-4xl ">{followers}</div>
              </div>
              <div className="text-pink-500">
                <FaUsers className="text-3xl md:text-5xl" />
              </div>
            </div>

            <div className="flex items-center justify-between shadow-md dark:shadow-slate-600  ">
              <div className="">
                Following
                <div className="  text-3xl md:text-4xl ">{following}</div>
              </div>
              <div className=" text-pink-500">
                <FaUserFriends className="text-3xl md:text-5xl" />
              </div>
            </div>

            <div className="flex items-center justify-between shadow-md dark:shadow-slate-600  ">
              <div className="">
                Public Repos
                <div className="text-3xl md:text-4xl ">{public_repos}</div>
              </div>
              <div className=" text-pink-500">
                <FaCodepen className="text-3xl md:text-5xl" />
              </div>
            </div>

            <div className="flex items-center justify-between shadow-md dark:shadow-slate-600  ">
              <div className="">
                Public Gists
                <div className="text-3xl md:text-4xl ml-2">{public_gists}</div>
              </div>
              <div className=" text-pink-500">
                <FaStore className="text-3xl md:text-5xl" />
              </div>
            </div>
          </div>
        </div>

        <RepoList repos={repos} />
      </div>
    </>
  );
}

export default User;
