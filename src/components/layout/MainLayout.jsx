import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import NavBar from "./Header";
import FooterSec from "./Footer";
import Preloader from "./Loader";

const Layout = () => {
  const [loaded, setLoaded] = useState(false);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const startExit = setTimeout(() => {
      setLoaded(true); // add `.loaded`
    }, 600);

    const removeLoader = setTimeout(() => {
      setShow(false); // unmount after animation
    }, 1800);

    return () => {
      clearTimeout(startExit);
      clearTimeout(removeLoader);
    };
  }, []);

  return (
    <>
      {show && <Preloader loaded={loaded} />}

      {!show && (
        <>
          <NavBar />
          <Outlet />
          <FooterSec />
        </>
      )}
    </>
  );
};

export default Layout;
