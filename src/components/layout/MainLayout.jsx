import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import NavBar from "./Header";
import FooterSec from "./Footer";
import Preloader from "./Loader";

const Layout = () => {
  const [loaded, setLoaded] = useState(false);
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    const start = setTimeout(() => {
      setLoaded(true); 

      const end = setTimeout(() => {
        setShowPreloader(false); 
      }, 1200); 

      return () => clearTimeout(end);
    }, 100);

    return () => clearTimeout(start);
  }, []);

  return (
    <>
      {showPreloader && <Preloader loaded={loaded} />}

      <NavBar />
      <Outlet />
      <FooterSec />
    </>
  );
};

export default Layout;
