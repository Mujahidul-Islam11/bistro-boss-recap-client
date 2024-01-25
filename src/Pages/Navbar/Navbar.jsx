import { NavLink } from "react-router-dom";
import { RiShoppingCartLine } from "react-icons/ri";
import { RiMenuLine } from "react-icons/ri";
import { MdClose } from "react-icons/md";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const links = (
    <>
      <NavLink
        to={"/"}
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "border-y-2 border-yellow-300"
            : ""
        }
      >
        <button className="md:text-xl px-4">Home</button>
      </NavLink>{" "}
      <br />
      <NavLink
        to={"/OurMenu"}
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "border-y-2 border-yellow-300"
            : ""
        }
      >
        <button className="md:text-xl px-4">Our Menu</button>
      </NavLink>{" "}
      <br />
      <NavLink
        to={"/OurShop"}
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "border-y-2 border-yellow-300"
            : ""
        }
      >
        <button className="md:text-xl px-4">Our Shop</button>
      </NavLink>
      <br />
      <NavLink
        to={"/Contact"}
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "border-y-2  border-yellow-300"
            : ""
        }
      >
        <button className="md:text-xl px-4">Contact Us</button>
      </NavLink>
      <br />
      <NavLink
        to={"/Shop"}
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "border-b-2 rounded-md border-yellow-300"
            : ""
        }
      >
        <button className="md:text-xl flex gap-2 items-center px-4">
          {" "}
          <RiShoppingCartLine className="text-2xl"></RiShoppingCartLine>{" "}
          <h3>(0)</h3>
        </button>
      </NavLink>
      <br />
      <NavLink
        to={"/Login"}
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "border-y-2 border-yellow-300"
            : ""
        }
      >
        <button className="md:text-xl px-4">Login</button>
      </NavLink>
    </>
  );


  return (
    <div>
      <div className="md:w-[1300px] mx-auto">
        <div className="flex justify-between items-center px-4 py-2 bg-black bg-opacity-45 shadow-xl text-white">
          <h3 className="md:text-xl font-semibold">
            <i>
              BISTRO BOSS <br />
              RESTAURANT
            </i>
          </h3>
          <div className="hidden md:flex items-center gap-4 uppercase">
            {links}
          </div>
            {menu ? (
              <MdClose
                onClick={() => setMenu(false)}
                className="text-2xl md:hidden cursor-pointer"
              />
            ) : (
              <RiMenuLine
                onClick={() => setMenu(true)}
                className="text-2xl md:hidden cursor-pointer"
              />
            )}
        </div>
      </div>
      {menu && (
        <div className="flex justify-end md:hidden md:w-[1324px]">
          <div className="bg-white rounded-lg shadow-xl w-[230px] space-y-4 px-4 py-4">
            {links}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
