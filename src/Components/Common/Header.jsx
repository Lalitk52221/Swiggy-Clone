import { FaSearch, FaShoppingCart } from "react-icons/fa";
import "../../App.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const cart = useSelector((state) => state.cart);

  const totalCartItem = Object.values(cart).reduce(
    (total, item) => total + (item.quantity || 0),
    0
  );
  return (
    <nav className="fixed top-0 z-10 bg-white flex gap-2 lg:justify-between justify-center md:text-lg text-xs lg:px-40 md:px-15 shadow-md py-3 items-center text-gray-700 w-full ">
      <NavLink to={"/"}>
        {" "}
        <img
          src="./images/Swiggy-Logo.png"
          alt="Swiggy logo"
          className="cursor-pointer w-3 md:w-7"
        />
      </NavLink>
      <ul className="flex md:gap-20 gap-5 font-semibold md:font-bold justify-end">
        <NavLink to={"/"} className="nav-item">
          <li>Home</li>
        </NavLink>
        <NavLink to={"/help"} className="nav-item">
          <li>Help</li>
        </NavLink>
        <NavLink to={"/search"} className="nav-item">
          <li className="flex items-center gap-1">
            Search <FaSearch size={12} />
          </li>
        </NavLink>
        <NavLink to={"/logout"} className="nav-item">
          <li>Logout</li>
        </NavLink>
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
