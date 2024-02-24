import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <h1 className="mx-5">Tasks Manager</h1>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link className="mx-3" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="mx-3" to="/new">
              Create task
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
