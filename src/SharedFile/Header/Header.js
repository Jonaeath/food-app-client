import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");

    navigate("/");
  };
  // console.log("Token:", localStorage.getItem("token"));

  const tabmenu = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      {localStorage.getItem("token") ? (
        <li>
          <Link to="/myOrder">My Orders</Link>
        </li>
      ) : (
        ""
      )}
    </>
  );

  return (
    <div>
      <div className="navbar bg-green-400">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {tabmenu}
            </ul>
          </div>
          <div className="btn btn-ghost text-xl">daisyUI</div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{tabmenu}</ul>
        </div>
        <div className="navbar-end">
          {!localStorage.getItem("token") ? (
            <div className="d-flex">
              <Link className="btn bg-white text-success mx-1 " to="/login">
                Login
              </Link>
              <Link className="btn bg-white text-success mx-1" to="/createuser">
                Signup
              </Link>
            </div>
          ) : (
            <div className="flex">
              <div className="flex m-2">
                <h3 className="mr-2 text-xl font-bold text-blue-500">Cart</h3>
                <FaShoppingCart className="mt-2 mr-1"></FaShoppingCart>
                <div className="badge badge-secondary mt-1 mr-2">+0</div>
              </div>
              <div>
                <button
                  onClick={handleLogout}
                  className="btn bg-white text-success"
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
