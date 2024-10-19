import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import HomePage from "./pages/Homepage";
import Signup from "./pages/Signup";
import Otp from "./components/Otp";

import PrivetRoute from "./components/PrivetRoute";

import CreateBlogs from "./pages/CreateBlog";
import GetBlogs from "./pages/GetBlogs";
import UpdateBlog from "./pages/UpdateBlog";
import AllBlogs from "./pages/AllBlogs";


const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/register" element={<Signup />}></Route>
        <Route path="/otp" element={<Otp />}></Route>
        <Route path="/createblog" element={<PrivetRoute><CreateBlogs /></PrivetRoute>}></Route>
        <Route path="/getblog" element={<PrivetRoute><GetBlogs /></PrivetRoute>}></Route>
        <Route path="/update/:id" element={<UpdateBlog />}></Route>
        <Route path="/admin" element={<AllBlogs />}></Route>

       
      </Routes>
    </div>
  );
};

export default Allroutes;
