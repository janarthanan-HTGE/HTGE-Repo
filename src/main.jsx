import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import BackToTop from "./components/overlay/Scrollup.jsx";
import CustomCursor from "./components/overlay/Cursor.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      {/* <BackToTop/> */}
      <CustomCursor/>
      <App />
    </BrowserRouter>
  </StrictMode>
);
