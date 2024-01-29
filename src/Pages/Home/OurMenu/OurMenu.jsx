/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

const OurMenu = () => {
  const [menus, setMenus] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => setMenus(data));
  }, []);

  return <div></div>;
};

export default OurMenu;
