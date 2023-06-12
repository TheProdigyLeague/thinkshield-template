import React from "react";
import "./authentication.css";

const LoginButton = () => {
  return (
    <React.Fragment>
      <button
        className="signup-button"
        onClick={() => console.log("Hello There")}
      >
        REGISTER
      </button>
      <button
        className="login-button"
        onClick={() => console.log("Hello There")}
      >
        LOGIN
      </button>
    </React.Fragment>
  );
};

export default LoginButton;
