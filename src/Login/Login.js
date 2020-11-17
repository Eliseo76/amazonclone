import React, { useState } from "react";
import classes from "./Login.module.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";

const Login = (props) => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };
  const register = (e) => {
    e.preventDefault();
    //firebase
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className={classes.login}>
      <Link to={"/"}>
        <img
          className={classes.login__logo}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="amazon_logo"
        />
      </Link>
      <div className={classes.login__container}>
        <h1>Sign-In</h1>
        <form>
          <h5>Email</h5>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="text"
          />
          <h5>Password</h5>
          <input
            value={password}
            type="password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <button
            onClick={(e) => signIn(e)}
            className={classes.login__signInButton}
            type={"submit"}
          >
            Sign In
          </button>
        </form>
        <p>
          By signing in you agree to Amazon FAKE CLONE Conditions of Use & Sale.
          Please see our Privacy Notice, our Cookie Notice and our Intrest-Based
          Ads Notice.
          <button
            className={classes.login__registerButton}
            onClick={(e) => register(e)}
          >
            Create your Amazon Account
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
