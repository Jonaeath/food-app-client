import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import Modal from "../../Modal";
import Cart from "../../Pages/Cart/Cart";
import { useCart } from "../../Context/ContextReducer";
import './Header.css';


const Header = () => {
  
  const data = useCart();
  const navigate = useNavigate();
  const [cartModalView, setCartModalView] = useState(false)

  const handleLogout = () => {
    localStorage.removeItem("token");

    navigate("/");
  };
  // console.log("Token:", localStorage.getItem("token"));

  const tabMenu = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      {localStorage.getItem("token") ? (
        <li>
          <Link to="/myorder">My Orders</Link>
        </li>
      ) : (
        ""
      )}
    </>
  );

  return (
    <div>
      <div className="navbar fixed z-20 bg-opacity-80 bg-green-400">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52" style={{ backgroundColor: 'green', "color":'white' }}
            >
              {tabMenu}
            </ul>
          </div>
          <div className="uppercase text-2xl text-orange-800 font-mono ...">
            <h1 className="wave-animation">
              <span className="text-blue-600 font-bold">Soft-Sequel</span> Food App
              </h1>
            </div>
        </div>
        <div className="navbar-end hidden font-bold lg:flex">
          <ul className="menu menu-horizontal px-1">{tabMenu}</ul>
        </div>
        <div className="navbar-end">
          {!localStorage.getItem("token") ? (
            <div className="d-flex">
              <Link className="btn bg-white text-success mx-1 font-bold" to="/login">
                Login
              </Link>
              <Link className="btn bg-white text-success mx-1 font-bold" to="/createuser">
                Signup
              </Link>
            </div>
          ) : (
         
            <div className="flex">
              <div className="flex btn btn-ghost mr-1" onClick={()=> {setCartModalView(true)}}>
                <h3 className="text-xl font-bold text-red-500">Cart</h3>
                <FaShoppingCart></FaShoppingCart>
                <div className="badge bg-yellow-200">+{data.length}</div>
              </div>
              {cartModalView ? <Modal onClose={()=> setCartModalView(false)}><Cart/> </Modal> : null}          
              <div>
                <button
                  onClick={handleLogout}
                  className="btn bg-white text-success font-bold"
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
