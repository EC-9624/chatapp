import React from "react";
import Add from "../img/addAvatar.png";

const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo"> Chat_App</span>
        <span className="title ">Login</span>
        <form>
          <input type="text" placeholder="display name" />
          <input type="password" placeholder="password" />
          <button>Sign in</button>
        </form>
        <p>
          You do have an account?<a href="*">Register</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
