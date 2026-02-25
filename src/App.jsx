import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "./components/layout/MainLayout";
import Home from "./pages/Homepage";
import About from "./pages/Aboutpage";
import Service from "./pages/Servicepage";
import ErrorPage from "./pages/404";
import ServiceDetails from "./pages/Servicedetailpage";
import Contact from "./pages/contactpage";
import Career from "./pages/Careerpage";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        
        {/* redirect old index */}
        <Route path="/index.html" element={<Navigate to="/" replace />} />

        {/* main pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* service list */}
        <Route path="/services" element={<Service />} />

        {/* dynamic service page */}
        <Route path="/services/:slug" element={<ServiceDetails/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/career" element={<Career/>} />

      </Route>

      {/* 404 */}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;