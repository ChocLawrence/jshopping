import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";
import "./Login.css";

function Login(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <form className="login" onSubmit={handleFormSubmit}>
      <strong>
        <h3>Login to JShopping</h3>
      </strong>
      <p>Please log in</p>
      <input
        placeholder="Enter your email"
        name="email"
        type="email"
        id="email"
        onChange={handleChange}
      />
      <input
        placeholder="******"
        name="password"
        type="password"
        id="pwd"
        onChange={handleChange}
      />
      {error ? (
        <div>
          <p className="error-text">The provided credentials are incorrect</p>
        </div>
      ) : null}
      <input type="submit" value="Log In" />
      <div className="links">
        <Link to="/signup">← Go to Signup</Link>
      </div>
    </form>
  );
}

export default Login;
