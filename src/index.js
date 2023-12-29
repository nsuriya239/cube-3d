import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const rootElement = document.getElementById("root");
const rootContainer = createRoot(rootElement);
rootContainer.render(<App />);
