import React, { useState } from "react";

export default function SignupForm({ onSignup }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }

    try {
      console.log("Signing up with:", { email, password }); // Debug
      await onSignup(email, password);
      setSuccess("Signup successful! You are now logged in.");
      setEmail("");
      setPassword("");
    } catch (err) {
      console.error("Signup failed:", err);
      // Handle existing user error
      if (err.code === 409) {
        setError("Email already exists. Try logging in instead.");
      } else {
        setError(err.message || "Signup failed. Try again.");
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded shadow-md w-96 mx-auto mt-20"
    >
      <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {success && <p className="text-green-500 mb-4">{success}</p>}

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full mb-4 px-3 py-2 border rounded"
        required
      />
      <input
        type="password"
        placeholder="Password (min 8 chars)"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full mb-4 px-3 py-2 border rounded"
        minLength={8}
        required
      />

      <button
        type="submit"
        className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
      >
        Sign Up
      </button>
    </form>
  );
}
