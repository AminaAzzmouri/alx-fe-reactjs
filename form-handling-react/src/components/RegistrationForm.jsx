import { useState } from "react";
import { registerUser } from "../lib/api";

export default function RegistrationForm() {
  const [values, setValues] = useState({ username: "", email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: "idle", message: "" });

  const validate = () => {
    const newErrors = {};
    if (!values.username.trim()) newErrors.username = "Username is required";
    if (!values.email.trim()) newErrors.email = "Email is required";
    if (!values.password) newErrors.password = "Password is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    // clear an error as user types
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus({ type: "loading" });
    try {
      const res = await registerUser(values);
      setStatus({ type: "success", message: `Registered as ${res.username}` });
      setValues({ username: "", email: "", password: "" });
    } catch (err) {
      setStatus({ type: "error", message: err?.message || "Registration failed" });
    }
  };

  return (
    <div className="card">
      <h2>Controlled Registration Form</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className="row">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            type="text"
            value={values.username}
            onChange={handleChange}
            autoComplete="username"
            placeholder="e.g. amina"
          />
          {errors.username && <span className="error">{errors.username}</span>}
        </div>

        <div className="row">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            autoComplete="email"
            placeholder="you@example.com"
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="row">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={values.password}
            onChange={handleChange}
            autoComplete="new-password"
            placeholder="••••••••"
          />
          {errors.password && <span className="error">{errors.password}</span>}
          <span className="helper">Tip: use 8+ chars with letters & numbers</span>
        </div>

        <button type="submit" disabled={status.type === "loading"}>
          {status.type === "loading" ? "Submitting…" : "Create account"}
        </button>

        {status.type === "success" && <p className="success">{status.message}</p>}
        {status.type === "error" && <p className="error">{status.message}</p>}
      </form>
    </div>
  );
}