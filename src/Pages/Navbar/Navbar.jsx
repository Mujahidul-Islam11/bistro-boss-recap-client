import { NavLink } from "react-router-dom";
import { RiShoppingCartLine } from "react-icons/ri";

const Navbar = () => {
  const links = (
    <>
      <NavLink
        to={"/"}
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "border-b-2 rounded-md border-yellow-300"
            : ""
        }
      >
        <button className="md:text-xl px-4">Home</button>
      </NavLink>

      <NavLink
        to={"/OurMenu"}
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "border-b-2 rounded-md border-yellow-300"
            : ""
        }
      >
        <button className="md:text-xl px-4">Our Menu</button>
      </NavLink>

      <NavLink
        to={"/OurShop"}
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "border-b-2 rounded-md border-yellow-300"
            : ""
        }
      >
        <button className="md:text-xl px-4">Our Shop</button>
      </NavLink>

      <NavLink
        to={"/Contact"}
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "border-b-2 rounded-md border-yellow-300"
            : ""
        }
      >
        <button className="md:text-xl px-4">Contact Us</button>
      </NavLink>

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

      <NavLink
        to={"/Login"}
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "border-b-2 rounded-md border-yellow-300"
            : ""
        }
      >
        <button className="md:text-xl px-4">Login</button>
      </NavLink>

    </>
  );
  return (
    <div className="md:w-[1300px] mx-auto">
      <div className="flex justify-between items-center px-4 py-2 bg-black bg-opacity-45 shadow-xl text-white">
        <h3 className="md:text-xl font-semibold">
          <i>
            BISTRO BOSS <br />
            RESTAURANT
          </i>
        </h3>
        <div className="hidden md:flex items-center gap-6 uppercase">
          {links}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
