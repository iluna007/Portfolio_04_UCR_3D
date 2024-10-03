// Import our custom CSS
import "./scss/styles.scss";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

// Import all of Bootstrap's JS

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "leaflet/dist/leaflet.css"; // Import Leaflet CSS

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
