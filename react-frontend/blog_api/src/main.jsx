import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./components/Header";
import App from "./App.jsx";

const root = createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <Header />
            <App />
          </div>
        }
      />
    </Routes>
  </Router>
);
