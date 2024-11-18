// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./Router"; // Đảm bảo bạn có file App.js trong thư mục src
// import './index.css'; // Nếu bạn có file CSS

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
