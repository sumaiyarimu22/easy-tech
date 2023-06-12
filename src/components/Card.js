import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../features/products/cartSlice";
import { currencyFormatter } from "../utilities/currencyFormatter";
const Card = ({ product }) => {
  //use navigate
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const addToCartHandler = (product) => {
    dispatch(addToCart(product));

    navigate("/cart");
  };

  return (
    <div className="product flex flex-col gap-2 hover:shadow-md bg-white rounded-xl overflow-hidden ">
      <div className="img">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="texts flex flex-col gap-3 px-5 pb-5">
        <span className="category-tag uppercase text-xs font-semibold tracking-widest text-cyan-500">
          {product.category}
        </span>
        <h3 className="title text-xl font-medium h-[5.25rem]">
          {product.name}
        </h3>
        <p className="details text-gray-500 h-[6rem]">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="price text-xl font-medium text-rose-600">
            {currencyFormatter(product.price)}
          </span>
          <button
            onClick={() => addToCartHandler(product)}
            className="uppercase bg-cyan-900 text-cyan-50 font-medium py-3 px-8 rounded-md hover:bg-teal-600 hover:text-teal-50 duration-300 shadow-md shadow-cyan-300 hover:shadow-teal-300"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
