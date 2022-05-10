import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registrasi from './Component/SigIn/Registrasi';
import Login from "./Component/SigIn/Login";
import Cheklist from "./Component/Chekclist";
import Items from "./Component/Items";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Registrasi />}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/cheklist" element={<Cheklist/>}></Route>
          <Route path="/cheklist/item" element={<Items/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;