import { FaSearch, FaShoppingCart } from "react-icons/fa";
import "../../App.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { toggleMode } from "../Redux/Slicer";

const Header = () => {
  const cart = useSelector((state) => state.cart);
  const mode = cart.mode
  const dispatch = useDispatch()
  const totalCartItem = Object.values(cart).reduce(
    (total, item) => total + (item.quantity || 0),
    0
  );

  const toggleTheme=()=>{
    dispatch(toggleMode())
  }
  return (
    <nav className={`fixed top-0 z-10 ${mode==="dark"?"bg-gray-800 text-gray-100":"bg-white text-gray-700"} flex gap-2 lg:justify-between justify-center md:text-lg text-xs lg:px-40 md:px-15 shadow-md py-3 items-center  w-full `}>
      <NavLink to={"/"}>
        {" "}
        <img
          src="./images/Swiggy-Logo.png"
          alt="Swiggy logo"
          className="cursor-pointer w-3 md:w-7"
        />
      </NavLink>
      <ul className="flex items-center md:gap-20 gap-5 font-semibold md:font-bold justify-end">
        <NavLink to={"/"} className="nav-item">
          <li>Home</li>
        </NavLink>
        <NavLink to={"/help"} className="nav-item">
          <li>Help</li>
        </NavLink>
        <NavLink to={"/search"} className="nav-item">
          <li className="flex items-center gap-1">
            Search <FaSearch />
          </li>
        </NavLink>
        <NavLink to={"/logout"} className="nav-item">
          <li>Logout</li>
        </NavLink>
        <div className="nav-item" onClick={toggleTheme}>
          <li>{mode==="dark"?<MdLightMode />:<MdDarkMode/>}</li>
        </div>
        <NavLink to={"/cart"} className="nav-item">
          <li className="flex items-center gap-1">
            Cart <FaShoppingCart />{" "}
            <span className="text-red-600">{totalCartItem}</span>
          </li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Header;
