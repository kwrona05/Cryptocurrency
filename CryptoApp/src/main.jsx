import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CryptoTracker from "./CryptoTracker";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CryptoTracker />
  </StrictMode>
);
