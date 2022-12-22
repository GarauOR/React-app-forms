import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import UserInfo from "../components/UserInfo";
import Home from "../components/Home";
import Footer from "../components/Footer";

function Router(props) {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<UserInfo />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default Router;
