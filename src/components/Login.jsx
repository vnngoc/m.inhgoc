import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { fetchToDoLogin, selecAuthLogin } from "../redux/authSlice";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const stateredux = useSelector(selecAuthLogin);
  console.log(stateredux);
  const navigate = useNavigate();
  if (stateredux != null) {
    navigate("/");
    return;
  }
  const handleLogin = (e) => {
    e.preventDefault();
    const newUser = {
      username: username,
      password: password,
    };
    dispatch(fetchToDoLogin(newUser));
  };
  return (
    <div
      style={{
        backgroundColor: "#999",
        padding: "10px",
        borderRadius:"10px",
      }}
    >
      <div className="login-title" > Log in </div>
      <form onSubmit={handleLogin}>
        <div class="row mb-3">
          <label for="username" class="username-title col-sm-2 col-form-label">
            Username
          </label>
          <div class="col-sm-10">
            <input
              type="username"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="username..."
              required
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        </div>

        <div class="row mb-3">
          <label
            for="inputPassword3"
            class="password-title col-sm-2 col-form-label"
          >
            Password
          </label>
          <div class="col-sm-10">
            <input
              type="password"
              class="form-control"
              id="inputPassword3"
              placeholder="password..."
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <button type="submit" class="btn btn-primary">
          Sign in
        </button>
        <div className="login-register"> Don't have an account yet? </div>
        <Link className="login-register-link" to="/register">
          Register one for free{" "}
        </Link>
      </form>
    </div>
  );
}

export default Login;
