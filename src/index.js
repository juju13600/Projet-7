import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

import "./index.css";
// pages
import HomePage from "./views/HomePage/HomePage";
import AboutPage from "./views/AboutPage/AboutPage";
import ProductPage from "./views/ProductPage/ProductPage";
import Error404Page from "./views/Error404Page/Error404Page";
// components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// data pour about page
import about from "../src/data/about.json";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route path="products/:id" element={<ProductPage />}></Route>
        <Route path="/about" element={<AboutPage data={about} />}></Route>
        <Route path="*" element={<Error404Page />}></Route>
        <Route path="/404" element={<Error404Page />}></Route>
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
