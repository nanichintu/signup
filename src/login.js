import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React, { useState } from "react";

const Login = (props) => {
  const [account, setAccount] = useState("");
  const [Password, setPassword] = useState("");

  const handlerPassword = (e) => {
    setPassword(e.target.value);
  };
  const handleremailaccount = (e) => {
    setAccount(e.target.value);
  };

  const handlerform = (e) => {
    e.preventDefault();
    console.log(account);
    console.log(Password);
    setAccount("");
    setPassword("");
  };

  return (
    <div>
      <center>
        <div style={{ width: 450, height: 400, backgroundColor: "white" }}>
          <form
            style={{
              width: 450,
              height: 500,
              position: "absolute",
              backgroundColor: "white",
              zIndex: 2,
              margin: "auto",
              marginTop: -500,
              boxShadow: "0px 0px 5px 1px rgba(0,0,0,0.20)",
            }}
            onClick={handlerform}
          >
            <h2
              className="text-white"
              style={{ padding: "10px", backgroundColor: "darkblue" }}
            >
              Login-form
            </h2>
            <br />
            <TextField
              label="email"
              type="email"
              required
              value={account}
              onInput={handleremailaccount}
            />
            <br />
            <br />
            <TextField
              label="password"
              type="password"
              required
              value={Password}
              onInput={handlerPassword}
            />
            <br />
            <br />
            <Button type="submit" variant="contained">
              Login
            </Button>
            <br />
            <br />
          </form>
          <Button
            variant="contained"
            style={{
              marginTop: -180,
              position: "absolute",
              zIndex: 4,
              marginLeft: -50,
            }}
            onClick={() => {
              props.closeform();
            }}
          >
            Register
          </Button>
        </div>
      </center>
    </div>
  );
};

export default Login;
