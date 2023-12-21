import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React, { useState } from "react";

const Signup = (props) => {
  const [name, setName] = useState("");
  const handlerText = (e) => {
    setName(e.target.value);
  };

  const [email, setEmail] = useState("");
  const handlerEmail = (e) => {
    setEmail(e.target.value);
  };
  const [number, setNumber] = useState("");
  const handlerNumber = (e) => {
    setNumber(e.target.value);
  };
  const [password, setPassword] = useState("");
  const handlerPassword = (e) => {
    setPassword(e.target.value);
  };

  const handlersubmit = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(email);
    console.log(number);
    console.log(password);
    setName("");
    setEmail("");
    setNumber("");
    setPassword("");
  };

  return (
    <div>
      <div
        style={{
          width: 450,
          height: 500,
          backgroundColor: "white",
          margin: "auto",
          boxShadow: "0px 0px 5px 1px rgba(0,0,0,0.20)",
          marginTop: 100,
        }}
      >
        <center>
          <form style={{ width: 400, lineHeight: 3 }} onClick={handlersubmit}>
            <h2>Sign-up Form</h2>
            <TextField
              label="username"
              type="text"
              onInput={handlerText}
              required
            />
            <TextField
              label="Email"
              type="email"
              value={email}
              onInput={handlerEmail}
              required
            />
            <TextField
              label="Phone-number"
              type="number"
              value={number}
              onInput={handlerNumber}
              required
            />
            <TextField
              label="password"
              type="password"
              value={password}
              onInput={handlerPassword}
              required
            />
            <br />
            <Button type="submit" variant="contained">
              Submit
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button
              type="submit"
              variant="contained"
              onClick={() => {
                props.showform();
              }}
            >
              Login
            </Button>
          </form>
        </center>
      </div>
    </div>
  );
};

export default Signup;
