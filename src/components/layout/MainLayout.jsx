import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import NavBar from "./Header";
import FooterSec from "./Footer";
import Preloader from "./Loader";

const Layout = () => {
   const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Preloader loaded={loaded} />
        <>
          <NavBar />
          <Outlet />
          <FooterSec />
        </>

    </>
  );
};

export default Layout;
