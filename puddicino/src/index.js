import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import MainLayout from "./layout/mainLayout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MainLayout>
    <App />
  </MainLayout>
);
