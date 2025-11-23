import { useState } from "react";
import { signup } from "../api/authApi";
import { useNavigate, Link } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await signup(form);
      localStorage.setItem("token", res.token);
      navigate("/");
    } catch (err) {
      alert("Signup failed");
    }
  };

  return (
    <div className="auth-container">
      <h2>Create Account</h2>

      <form onSubmit={handleSubmit}>
        <input name="username" placeholder="Username" onChange={handleChange} />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} />

        <button type="submit">Sign Up</button>
      </form>

      <p>Already have an account? <Link to="/login">Login</Link></p>
    </div>
  );
}

export default Signup;
