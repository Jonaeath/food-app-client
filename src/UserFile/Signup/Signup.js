import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card w-full md:w-96 shadow-2xl bg-base-100 py-10 px-8">
        <form>
          <h1 className="text-4xl text-center font-bold mb-8">Sign Up!</h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              name="email"
              placeholder="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
            />
            <label className="label">
              <Link to="#" className="label-text-alt link link-hover">
                Forgot password?
              </Link>
            </label>
          </div>
          <div className="form-control mt-6">
            <input
              className="btn btn-primary w-full"
              type="submit"
              value="Sign Up"
            />
          </div>
        </form>
        <p className="text-center mt-4">
          Already Signed Up?
          <Link className="text-orange-600 font-bold ml-1" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
