import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [createUser, setCreateUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);

  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/api/createuser", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(createUser),
      });
      const json = await response.json();
      console.log(json);
      if (!json.success) {
        // setError(json.message || "Signup failed");
        alert("Enter Valid Character");
      } else {
        // Signup successful, handle accordingly (redirect or show success message)
      }
    } catch (error) {
      setError("An error occurred, please try again later");
      console.error("Signup error:", error);
    }
  };

  const onChange = (event) => {
    setCreateUser({ ...createUser, [event.target.name]: event.target.value });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card w-full md:w-96 shadow-2xl bg-base-100 py-10 px-8">
        <form onSubmit={handelSubmit}>
          <h1 className="text-4xl text-center font-bold mb-8">Log In!</h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              value={createUser.email}
              onChange={onChange}
              required
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
              value={createUser.password}
              onChange={onChange}
              minLength={6} // Example: Minimum password length of 6 characters
              required
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
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </form>
        <p className="text-center mt-4">
          Please Register Here?
          <Link className="text-orange-600 font-bold ml-1" to="/login">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
