import React, { useContext, useState } from "react";
import AuthContext from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import LoginImage from "../../assets/login-image.png";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(credentials);
    navigate("/");
  };

  return (
    <div className="flex h-screen">
      <div className="flex bg-blue-700 w-3/4 items-center justify-center">
        <img
          src={LoginImage}
          alt="login"
          className="w-[800px] h-[600px] object-cover"
        />
      </div>

      <div className="w-1/4 flex items-center justify-center bg-white">
        <div className="bg-white p-8  w-80">
          <h2 className="text-2xl font-bold text-center">Login</h2>
          <form onSubmit={handleSubmit} className="mt-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={credentials.email}
              onChange={handleChange}
              className="w-full p-2 border rounded mt-2"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={credentials.password}
              onChange={handleChange}
              className="w-full p-2 border rounded mt-2"
              required
            />
            <button
              type="submit"
              className="w-full mt-4 p-2 bg-blue-500 text-white rounded"
            >
              Login
            </button>
          </form>
          <p className="text-center mt-2">
            Don't have an account?{" "}
            <a href="/register" className="text-blue-500">
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
