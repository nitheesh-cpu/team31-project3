import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import InventoryWeb from "./InventoryWeb.jsx";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <InventoryWeb/>
  </React.StrictMode>
);
