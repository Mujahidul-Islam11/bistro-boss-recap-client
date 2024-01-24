import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Navbar/Navbar.jsx";
import Footer from "../Pages/Footer/Footer";
import { useEffect, useState } from "react";
import { PacmanLoader  } from "react-spinners";

const Main = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="flex justify-center my-40">
          <PacmanLoader 
            color={"#36d7b7"}
            loading={loading}
            size={30}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div>
          <div className="fixed w-full z-10">
            <Navbar></Navbar>
          </div>
          <div className="md:w-[1300px] mx-auto">
            <Outlet></Outlet>
          </div>
          <Footer></Footer>
        </div>
      )}
    </div>
  );
};

export default Main;
