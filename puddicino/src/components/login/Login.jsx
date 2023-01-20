import { useState, useRef } from "react";
import users from "../../utils/usersAccess";
import "./index.css";

const Login = () => {
  const showPass = useRef(null);
  const [loginState, setLoginState] = useState({});

  const onFormSubmit = () => {
    if (users) {
      users.map((user) => {
        if (
          user.username === loginState.username &&
          user.password === loginState.password
        ) {
          localStorage.setItem(
            "username",
            JSON.stringify({ ...loginState, username: user.username })
          );
        }
      });
    }
  };

  return (
    <div className="Login">
      <h3>Login</h3>
      <form className="wrapper" onSubmit={onFormSubmit}>
        <input
          className="loginInput"
          type="text"
          value={loginState.username}
          onChange={(e) =>
            setLoginState((prev) => ({ ...prev, username: e.target.value }))
          }
          placeholder="Nome utente"
        />
        <input
          className="loginInput"
          type="password"
          value={loginState.password}
          onChange={(e) =>
            setLoginState((prev) => ({ ...prev, password: e.target.value }))
          }
          placeholder="Password"
          ref={showPass}
        />
        <input className="inputBtnLogin" type="submit" value="Accedi" />
      </form>
    </div>
  );
};

export default Login;
