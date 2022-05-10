import React, { useState } from "react";
import axios from "axios";
import {TextField} from "@mui/material";
import { useNavigate } from "react-router-dom";
// import "./userCss/Login.css";
import { Container, Button } from "react-bootstrap";

const Cheklist = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState([]);
  const [tambahData, setTambahData] = React.useState({
    name: "",
  });

  const getData = async () => {
    setToken(
      "eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6W119.i2OVQdxr08dmIqwP7cWOJk5Ye4fySFUqofl-w6FKbm4EwXTStfm0u-sGhDvDVUqNG8Cc7STtUJlawVAP057Jlg"
    );
    const response = await axiosJwt.get(
      "http://94.74.86.174:8080/api/checklist",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response.data);
  };

  // cara penggunaan axios interceptors
  const axiosJwt = axios.create();

  const handler = (e) => {
    const newDataUser = { ...tambahData };
    newDataUser[e.target.name] = e.target.value;
    setTambahData(newDataUser);
  };

  const TambahData = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://94.74.86.174:8080/api/checklist", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        name: tambahData.name,
      });
      console.log('berhasil nambah data')
    } catch (e) {
      if (e.response) {
        console.log(e);
      }
    }
  };

  // useEffect(() => {
  //   userLogin()
  // },[]);

  return (
    <>
      <Container>
        <Button onClick={getData} className="mt-3" variant="success">
          Get data
        </Button>
        {/* <h1>Selamat Datang, {nama}</h1> */}

        {/* <Button onClick={Logout} className="mt-3" variant="warning">
          Log Out
        </Button> */}
        <Button onClick={TambahData} className="mt-3" variant="warning">
          tambah data
        </Button>

        <TextField
          name="name"
          id="outlined-basic"
          label="name"
          color="success"
          style={{ marginBottom: "3rem", marginTop: "1rem" }}
          onChange={(e) => handler(e)}
          value={tambahData.name}
        />
      </Container>
    </>
  );
};

export default Cheklist;
