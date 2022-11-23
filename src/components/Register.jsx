import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchToDoRegister, selecAuthRegister } from "../redux/authSlice";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const stateReduxRegister = useSelector(selecAuthRegister);
  console.log(stateReduxRegister);
  if (stateReduxRegister) {
    navigate("/login");
    return;
  }
  const handleRegister = (e) => {
    e.prevenDefault();
    const newUserName = {
      email: email,
      username: username,
      password: password,
    };
    console.log(newUserName);
    dispatch(fetchToDoRegister(newUserName));
  };
  return (
    <div style={{ backgroundColor: "#999", padding: "10px",borderRadius:"10px", }}>
      <div className="login-title"> Register </div>
      <form onSubmit={handleRegister}>
        <div class="form-floating mb-3">
          <input
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <label for="floatingInput">Email address</label>
        </div>

        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="floatingUserName"
            placeholder="Username"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
          <label for="floatingPassword">Username</label>
        </div>

        <div class="form-floating mb-3">
          <input
            type="password"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <label for="password-register floatingPassword">Password</label>
        </div>

        <button type="submit" class="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
