import React from "react";
import { Container } from "react-bootstrap";
import {TextField} from "@mui/material";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const Registrasi = () => {
    const [dataUser, setDataUser] = React.useState({
        email: '',
        password: "",
        username: ''
    });

    const [msg,setMsg] = React.useState("");
    const navigate = useNavigate()

    const handler = (e) => {
        const newDataUser = {...dataUser};
        newDataUser[e.target.name] = e.target.value;
       setDataUser(newDataUser)
    }

    const auth = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://94.74.86.174:8080/api/register', {
               email: dataUser.email,
               password: dataUser.password,
               username: dataUser.username,
            });
           navigate('/login')
        } catch (e) {
            if(e.response){
                setMsg(e.response.data.msg)
            }
        }
    }



  return (
    <>
      <div className="bg">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/20876cab-b49d-4957-bbaf-906ceb1c05f1/0e67ce03-7a6f-4e08-acaa-982a598a0a56/ID-id-20220117-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />
      </div>
      <Container className="form-datadiri" style={{ width: "25%" }}>
        <div className="header-addData">
          <h2>Registrasi</h2>
          <h5 style={{color:"whitesmoke"}}>Selamat Datang Di komunitas kami.</h5>
          <h5 style={{color:"red"}}>{msg}</h5>
        </div>
        <form onSubmit={auth}  className="form">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <TextField className="input"
              name="email"
              id="outlined-basic"
              label="Nama"
              color="success"
              style={{ marginBottom: "1rem", marginTop: "1rem" }}
              onChange={(e) => handler(e)}
              value={dataUser.email}
            />
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
              name="username"
              id="outlined-basic"
              label="Username"
              color="success"
              style={{ marginBottom: "3rem", marginTop: "1rem" }}
              onChange={(e) => handler(e)}
              value={dataUser.username}
            />
            <button className="btn-tambah bg-success" >Masuk</button>
          </div>
        </form>
      </Container>
    </>
  );
};

export default Registrasi;
