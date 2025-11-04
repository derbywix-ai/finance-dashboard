import React, { useState } from "react";
import Login from "./login";

export default function Auth({ onLogin }) {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div>
      {isLogin ? (
        <Login onLogin={onLogin} />
      ) : (
        <div className="text-center p-8">
          <h2 className="text-2xl font-bold mb-4">Signup Placeholder</h2>
          <p className="text-gray-500">Signup form will go here</p>
        </div>
      )}

      <div className="text-center mt-4">
        <button
          onClick={() => setIsLogin(!isLogin)}
          className="text-blue-600 hover:underline"
        >
          {isLogin ? "Switch to Signup" : "Switch to Login"}
        </button>
      </div>
    </div>
  );
}
