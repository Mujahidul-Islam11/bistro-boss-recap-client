import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <NavLink to={'/'} className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "border-b-2 rounded-md border-yellow-300" : ""
  }>
        <button className="md:text-xl px-4">Home</button>
      </NavLink>

      <NavLink to={'/OurMenu'} className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "border-b-2 rounded-md border-yellow-300" : ""
  }>
        <button className="md:text-xl px-4">Our Menu</button>
      </NavLink>

      <NavLink to={'/OurShop'} className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "border-b-2 rounded-md border-yellow-300" : ""
  }>
        <button className="md:text-xl px-4">Our Shop</button>
      </NavLink>

      <NavLink to={'/Contact'} className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "border-b-2 rounded-md border-yellow-300" : ""
  }>
        <button className="md:text-xl px-4">Contact Us</button>
      </NavLink>

      <NavLink to={'/Shop'} className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "border-b-2 rounded-md border-yellow-300" : ""
  }>
        <button className="md:text-xl px-4"></button>
      </NavLink>

    </>
  );
  return (
    <div className="md:w-[1250px] mx-auto">
      <div className="flex justify-between items-center px-4 py-2 bg-black bg-opacity-35 text-white">
        <h3 className="text-xl font-semibold">
          <i>
            BISTRO BOSS <br />
            RESTAURANT
          </i>
        </h3>
        <div className="hidden md:flex gap-6 uppercase">{links}</div>
      </div>
    </div>
  );
};

export default Navbar;
