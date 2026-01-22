import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/MainLayout";
import ErrorPage from "./components/Pages/Error";
import Home from "./components/Pages/HomePage";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>

      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
