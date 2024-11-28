import { FaSearch, FaShoppingCart } from "react-icons/fa";
import "../../App.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="flex justify-between px-40 shadow-md py-3 items-center text-gray-700 w-full">
    <NavLink to={"/"}>  <img
        src="./images/Swiggy-Logo.png"
        alt="Swiggy logo"
        className="w-20 cursor-pointer"
      /></NavLink>
      <ul className="flex gap-20 text-lg font-bold justify-end">
        <NavLink to={"/"} className="nav-item">
          <li>Home</li>
        </NavLink>
        <NavLink to={"/help"} className="nav-item">
          <li>Help</li>
        </NavLink>
        <NavLink to={"/search"} className="nav-item">
          <li className="flex items-center gap-2">
            Search <FaSearch />
          </li>
        </NavLink>
        <NavLink to={"/logout"} className="nav-item">
          <li>Logout</li>
        </NavLink>
        <NavLink to={"/cart"} className="nav-item">
          <li className="flex items-center gap-2">
            Cart <FaShoppingCart />
          </li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Header;
