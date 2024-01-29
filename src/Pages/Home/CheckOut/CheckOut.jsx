import { useEffect, useState } from "react";
import SectionIntro from "../../SectionIntro/SectionIntro";
import { NavLink } from "react-router-dom";

const CheckOut = () => {
  const [menus, setMenus] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => setMenus(data));
  }, []);
 const popular = menus?.filter(item => item.category = "popular")
  return (
    <div>
      <SectionIntro
        heading={"Check it out"}
        intro={"Our Popular Menu"}
      ></SectionIntro>
      <div className="grid md:grid-cols-2 gap-10 dd md:mx-24">
        {
            popular.slice(1,7).map(menu => <div className="flex gap-6 mb-4" key={menu?.category}>
                <img src={menu.image} 
                style={{borderRadius:"200px 0 200px 200px"}}
                 className="w-[100px] h-[100px]" alt="" />
                <div>
                    <h3 className="text-xl font-semibold">{menu.name}</h3>
                    <p>{menu.recipe}</p>
                </div>
                <h1 className="text-xl text-orange-400">{menu.price}</h1>
            </div>)
        }
      </div>
      <NavLink to={'/OurMenu'}>
      <button 
      className="btn mx-auto flex justify-center mt-10 px-10 hover:border-black uppercase border-b-2 border-b-black rounded-b-lg "
      >View full menu</button>
      </NavLink>
    </div>
  );
};

export default CheckOut;
