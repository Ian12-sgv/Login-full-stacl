import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();
  return (
    <nav className="bg-zinc-700 my-2 flex flex-col sm:flex-row justify-between py-5 px-10 rounded-lg w-full">
      <Link to={isAuthenticated ? "/tasks" : "/"}>
        <h1 className="text-2xl font-bold">Tasks manager</h1>
      </Link>
      <ul className="flex flex-col sm:flex-row gap-y-2 sm:gap-x-2 mt-4 sm:mt-0">
        {isAuthenticated ? (
          <>
            <li className="text-zinc-100">Bienvenido {user.username}</li>
            <li className="text-zinc-100">
              <Link
                to="/add-task"
                className="bg-indigo-500 px-4 py-2 rounded-lg "
              >
                agrega una tarea
              </Link>
            </li>
            <li className="text-zinc-100">
              <Link
                to="/"
                onClick={() => logout()}
                className="bg-red-500 px-4 py-2 rounded-lg "
              >
                Logout
              </Link>
            </li>
          </>
        ) : (
          <>
            <li className="text-zinc-100">
              <Link to="/login" className="bg-indigo-500 px-4 py-2 rounded-lg ">
                Login
              </Link>
            </li>
            <li className="text-zinc-100">
              <Link
                to="/register"
                className="bg-indigo-500 px-4 py-2 rounded-lg "
              >
                Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
