import React, { useState } from "react";
import "../style/Register.css";
import { registerUser } from "../api/api";
import { useNavigate } from "react-router-dom";

function Register({ token, setToken }) {
  const [loading, setLoading] = useState(null);
  const [err, setErr] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fName, setFName] = useState("");
  const [Lname, setLName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    setLoading(true);
    const newUser = {
      email,
      username,
      password,
      name: {
        fName,
        Lname,
      },
    };

    try {
      const response = await registerUser(newUser);
      setLoading(false);
      navigate("/");
    } catch (error) {
      console.error(error);
      setErr("Wrong username or password. Please try again");
      setLoading(false);
    }
  };

  return (
    <div className="register-container">
      <div className="register-title">
        <h2>Sign up</h2>
      </div>
      <form className="register-form">
        <label htmlFor="first-name" className="register-label">
          First Name:
          <input
            type="text"
            name="first-name"
            className="register-inputs"
            value={fName}
            onChange={(e) => {
              setFName(e.target.value);
            }}
          />
        </label>
        <label htmlFor="last-name" className="register-label">
          Last Name:
          <input
            type="text"
            name="last-name"
            className="register-inputs"
            value={Lname}
            onChange={(e) => {
              setLName(e.target.value);
            }}
          />
        </label>
        <label htmlFor="email" className="register-label">
          Email:
          <input
            type="email"
            name="email"
            className="register-inputs"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </label>
        <label htmlFor="username" className="register-label">
          Username:
          <input
            type="text"
            name="username"
            className="register-inputs"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </label>
        <label htmlFor="password" className="register-label">
          Password:
          <input
            type="password"
            name="password"
            className="register-inputs"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
        <div className="buttons">
          <div className="register-button-div">
            <button
              className="simple-button"
              onClick={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
      {loading && <h3 className="loading">Authenticating, Please Wait....</h3>}
    </div>
  );
}

export default Register;
