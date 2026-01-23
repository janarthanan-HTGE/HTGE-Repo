import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/MainLayout";
import Home from "./components/pages/Homepage";
import { Navigate } from "react-router-dom";
import About from "./components/Pages/Aboutpage";
import ErrorPage from "./components/pages/404";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/index.html" element={<Navigate to="/" replace />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>

      <Route path="*" element={<ErrorPage/>}/>
    </Routes>
  );
}

export default App;
