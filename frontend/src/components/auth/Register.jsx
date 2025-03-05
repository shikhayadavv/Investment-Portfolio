import { useState } from "react";
import { registerUser } from "../../utils/api";
import { useNavigate } from "react-router-dom";
import LoginImage from "../../assets/login-image.png"

const Register = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(userData);
      alert("Registration successful! Please login.");
      navigate("/login");
    } catch (error) {
      console.error("Registration failed:", error.response.data.message);
    }
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

      <div className=" w-1/4 flex items-center justify-center bg-white">
        <div className="bg-white p-8 w-80">
          <h2 className="text-2xl font-bold text-center">Register</h2>
          <form onSubmit={handleSubmit} className="mt-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={userData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded mt-2"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={userData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded mt-2"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={userData.password}
              onChange={handleChange}
              className="w-full p-2 border rounded mt-2"
              required
            />
            <button
              type="submit"
              className="w-full mt-4 p-2 bg-blue-700 text-white rounded"
            >
              Register
            </button>
          </form>
          <p className="text-center mt-2">
            Already have an account? <a href="/login" className="text-blue-500">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
