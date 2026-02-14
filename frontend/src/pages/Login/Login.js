import React, { useState, useEffect } from "react";
import styles from "./Login.module.css";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const BASE_URL = process.env.BASE_URL;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}users/login`,
        {
          email,
          password,
        },
      );

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      setLoading(false);
      navigate("/");
    } catch (error) {
      setLoading(false);
      alert(error.response?.data?.message || "Login Failed");
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
        <h2 className={styles.title}>Login</h2>

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
          {loading ? "Loading..." : "Login"}
        </button>

        <p className={styles.linkText}>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
