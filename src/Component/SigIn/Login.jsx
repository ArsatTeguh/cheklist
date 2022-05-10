import React from "react";
import "./userCss/Login.css";
import { Container } from "react-bootstrap";
import { TextField } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [dataUser, setDataUser] = React.useState({
    password: "",
    username: "",
  });
  const [msg, setMsg] = React.useState("");
  const navigate = useNavigate();

  const handler = (e) => {
    const newDataUser = { ...dataUser };
    newDataUser[e.target.name] = e.target.value;
    setDataUser(newDataUser);
  };

  const auth = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://94.74.86.174:8080/api/login", {
        password: dataUser.password,
        username: dataUser.username,
      });
      navigate("/cheklist");
    } catch (e) {
      if (e.response) {
        setMsg(e.response.data.msg);
      }
    }
  };

  return (
    <>
      <div className="bg-login">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/20876cab-b49d-4957-bbaf-906ceb1c05f1/0e67ce03-7a6f-4e08-acaa-982a598a0a56/ID-id-20220117-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />
      </div>
      <Container className="form-datadiri" style={{ width: "25%" }}>
        <div className="header-addData">
          <h2>Login</h2>
          <h5 style={{ color: "whitesmoke" }}>
            Pastikan Anda Sudah Melakukan Registrasi.
          </h5>
          <h5 style={{ color: "red" }}>{msg}</h5>
        </div>
        <form onSubmit={auth} className="form">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <TextField
              name="password"
              id="outlined-basic"
              label="Password"
              color="success"
              style={{ marginBottom: "3rem", marginTop: "1rem" }}
              onChange={(e) => handler(e)}
              value={dataUser.password}
            />
            <TextField
              className="input"
              name="username"
              id="outlined-basic"
              label="Username"
              color="success"
              style={{ marginBottom: "1rem", marginTop: "1rem" }}
              onChange={(e) => handler(e)}
              value={dataUser.username}
            />
            <button className="btn-tambah bg-success">Masuk</button>
            <a
              className="mt-3"
              style={{ textDecoration: "none" }}
              href="/registrasi"
            >
              Anda Belum Miliki Akun?
            </a>
          </div>
        </form>
      </Container>
    </>
  );
};

export default Login;
