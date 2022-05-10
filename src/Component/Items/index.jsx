import React, { useState, useEffect } from "react";
import axios from "axios";
import {TextField} from "@mui/material";
// import "./userCss/Login.css";
import { Container, Button } from "react-bootstrap";

const Items = () => {
  const [token, setToken] = useState([]);
  const [tambahData, setTambahData] = React.useState({
    name: "",
  });
  const [id, setId] = React.useState();
  const [idItems, setIdItems] = React.useState();


  const getData = async () => {
    setToken(
      "eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6W119.i2OVQdxr08dmIqwP7cWOJk5Ye4fySFUqofl-w6FKbm4EwXTStfm0u-sGhDvDVUqNG8Cc7STtUJlawVAP057Jlg"
    );
    const response = await axios.get("http://94.74.86.174:8080/api/checklist",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response.data.data);
    setId(response.data.data)
  };

  const GetId = () => {
    const newId = id.map((data) => data.id)
    return newId[0]
    }

  const getItems = async () => {
    setToken(
      "eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6W119.i2OVQdxr08dmIqwP7cWOJk5Ye4fySFUqofl-w6FKbm4EwXTStfm0u-sGhDvDVUqNG8Cc7STtUJlawVAP057Jlg"
    );
    const response = await axios.get(`http://94.74.86.174:8080/api/checklist/${GetId()}/item`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response.data);
    setIdItems(response.data.data)
  };

  const GetIdItems = () => {
    const newId = idItems.map((data) => data.id)
    return newId[0]
    }

  const handler = (e) => {
    const newDataUser = { ...tambahData };
    newDataUser[e.target.name] = e.target.value;
    setTambahData(newDataUser);
  };

  const TambahItem = async (e) => {
    await axios.post(`http://94.74.86.174:8080/api/checklist/${GetId()}/item`, {
    itemName: tambahData.name 
   },
   {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
   );
   console.log('berhasil item baru  ' + tambahData.name)
  };

  // ======================== itemsBy ID =============================
  const getItemsById = async () => {
    setToken(
      "eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6W119.i2OVQdxr08dmIqwP7cWOJk5Ye4fySFUqofl-w6FKbm4EwXTStfm0u-sGhDvDVUqNG8Cc7STtUJlawVAP057Jlg"
    );
    const response = await axios.get(`http://94.74.86.174:8080/api/checklist/${GetId()}/item/${GetIdItems()}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response.data);
  };


  const UpdateStatuSItems = async () => {
    setToken(
      "eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6W119.i2OVQdxr08dmIqwP7cWOJk5Ye4fySFUqofl-w6FKbm4EwXTStfm0u-sGhDvDVUqNG8Cc7STtUJlawVAP057Jlg"
    );
    const response = await axios.put(`http://94.74.86.174:8080/api/checklist/${GetId()}/item/${GetIdItems()}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response.data);
  };


  const DeleteStatuSItems = async () => {
    setToken(
      "eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6W119.i2OVQdxr08dmIqwP7cWOJk5Ye4fySFUqofl-w6FKbm4EwXTStfm0u-sGhDvDVUqNG8Cc7STtUJlawVAP057Jlg"
    );
    const response = await axios.delete(`http://94.74.86.174:8080/api/checklist/${GetId()}/item/${GetIdItems()}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response.data);
  };


  const RenameStatuSItems = async () => {
    setToken(
      "eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6W119.i2OVQdxr08dmIqwP7cWOJk5Ye4fySFUqofl-w6FKbm4EwXTStfm0u-sGhDvDVUqNG8Cc7STtUJlawVAP057Jlg"
    );
    const response = await axios.put(`http://94.74.86.174:8080/api/checklist/${GetId()}/item/${GetIdItems()}`,{
      itemName: tambahData.name 
     },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response.data);
  };

  useEffect(() => {
    getData()
  },[]);
  return (
    <>
      <Container>
        <Button onClick={getData} className="mt-3" variant="success">
          Get data
        </Button>
        <Button onClick={getItems} className="mt-3" variant="success">
          Get items
        </Button>
        <Button onClick={TambahItem} className="mt-3" variant="warning">
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
        <br />
        <br />
        <br />
        <Button onClick={getItemsById} className="mt-3" variant="warning">
          get items by Id
        </Button>
        <Button onClick={UpdateStatuSItems} className="mt-3" variant="warning">
          update items by Id
        </Button>
        <Button onClick={DeleteStatuSItems} className="mt-3" variant="warning">
          Delete items by Id
        </Button>
        <Button onClick={RenameStatuSItems} className="mt-3" variant="warning">
          Rename items by Id
        </Button>
      </Container>
    </>
  );
};

export default Items;
