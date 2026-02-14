import React, { useState, useEffect } from "react";
import styles from "./Register.module.css";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      await axios.post(`${process.env.REACT_APP_BASE_URL}users/register`, {
        name,
        email,
        password,
      });

      setLoading(false);
      alert("Registration successful");
      navigate("/login");
    } catch (error) {
      setLoading(false);
      alert(error.response?.data?.message || "Registration Failed");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className={styles.container}>
      <form className={styles.card} onSubmit={submitHandler}>
        <h2 className={styles.title}>Register</h2>

        <input
          type="text"
          placeholder="Enter name"
          className={styles.input}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter email"
          className={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter password"
          className={styles.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className={styles.button}>
          {loading ? "Loading..." : "Register"}
        </button>

        <p className={styles.linkText}>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
