import React from "react";
import { createRoot } from "react-dom/client";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App.jsx";

const API_BASE_URL = (import.meta.env.VITE_BACKEND_URL || "http://localhost:4000").replace(/\/$/, "");
axios.defaults.baseURL = API_BASE_URL;

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />);
