import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import styles from '../styles/signup.module.css';
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import { API_BASE } from "@/config/api";

// const API_BASE =
//   import.meta.env.VITE_API_URL || "http://localhost:5000";

export default function SignupPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      await axios.post(
        `${API_BASE}/users/signup`,
        form
      );

      setSuccess("Account created successfully. Please sign in.");
      setTimeout(() => navigate("/signin"), 1500);
    } catch (err: any) {
      setError(err.response?.data?.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className={styles.signupWrapper}>
        <div className={styles.signupCard}>
          <h1>Create Account</h1>
          <p className={styles.subtitle}>
            Start converting Facebook leads smarter
          </p>

          {error && <div className={styles.error}>{error}</div>}
          {success && <div className={styles.success}>{success}</div>}

          <form onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Create a strong password"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" disabled={loading}>
              {loading ? "Creating Account..." : "Sign Up"}
            </button>
          </form>

          <div className={styles.footerText}>
            Already have an account?{" "}
            <span onClick={() => navigate("/signin")}>
              Sign in
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
