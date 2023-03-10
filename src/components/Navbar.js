import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { cartItem } = useSelector((state) => state.cart);
  return (
    <div className="navbar-bg bg-cyan-900 text-cyan-50 h-20 flex justify-center items-center">
      <div className="navbar container mx-auto flex items-center justify-between">
        <div className="left">
          <span className="text-2xl italic font-semibold">
            easy<span className="text-teal-500">Tech</span>
          </span>
        </div>
        <div className="right flex items-center gap-5 mx-5">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/products" className="nav-link">
            Products
          </Link>
          <Link to="/cart">
            <span className="cart-icon relative">
              <BsCart3 />
              <span className="cart-counter absolute -top-3 -right-3 text-xs bg-teal-600 h-5 w-5 rounded-full flex items-center justify-center font-medium">
                {cartItem.length}
              </span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
