import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout/MainLayout";
import Home from "./components/page/Homepage";
import About from "./components/page/Aboutpage";
import ErrorPage from "./components/page/404";

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
