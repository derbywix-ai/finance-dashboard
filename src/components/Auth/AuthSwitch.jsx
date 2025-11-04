import React, { useState } from "react";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";

export default function AuthSwitch({ onLogin, onSignup }) {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div>
      {isSignup ? (
        <SignupForm onSignup={onSignup} />
      ) : (
        <LoginForm onLogin={onLogin} />
      )}

      <p className="text-center mt-4 text-sm">
        {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
        <button
          className="text-blue-600 hover:underline"
          onClick={() => setIsSignup(!isSignup)}
        >
          {isSignup ? "Switch to Login" : "Sign Up"}
        </button>
      </p>
    </div>
  );
}
