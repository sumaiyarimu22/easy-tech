import { currencyFormatter } from "../utilities/currencyFormatter";
import { BiArrowBack } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  clearCart,
  decreaseCart,
  removeFromCart,
} from "../features/products/cartSlice";

const Cart = () => {
  const { cartItem: data } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleRemove = (product) => {
    dispatch(removeFromCart(product));
  };

  const handleDecrease = (product) => {
    dispatch(decreaseCart(product));
  };

  return (
    <div className="cart-section container mx-auto py-10">
      <h2 className="section-title uppercase text-2xl font-bold text-center space-font mb-10">
        {data.length > 0 ? " Your Cart" : "cart is empty"}
      </h2>
      <div className="text-center">
        {data.length === 0 && (
          <Link
            to="/products"
            className="continue uppercase text-sky-500 font-medium tracking-widest flex justify-center items-center gap-2 group"
          >
            <span className="inline-block text-2xl group-hover:-translate-x-3">
              <BiArrowBack />
            </span>
            start shopping now
          </Link>
        )}
      </div>
      {data.length > 0 && (
        <>
          <div className="cart-container">
            <div className="product-headlines grid grid-cols-5 gap-10 border-b-2 pb-2 uppercase font-medium">
              <div className="col-product flex col-span-2">Product</div>
              <div className="col-unit-price">Unit price</div>
              <div className="col-quantity">Quantity</div>
              <div className="col-total-price ml-auto">Total price</div>
            </div>

            <div className="products flex flex-col">
              {/* single product data */}
              {data?.map((product) => (
                <div
                  key={product.id}
                  className="product grid grid-cols-5 gap-10 mt-5 border-b pb-5"
                >
                  <div className="left flex col-span-2 gap-5">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-20 w-20 object-cover"
                    />
                    <div className="details flex flex-col gap-2 items-start">
                      <span>{product.name}</span>
                      <button
                        onClick={() => handleRemove(product)}
                        className="font-medium text-gray-400 hover:text-rose-500 duration-300"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  {/* unit price */}
                  <div className="unit-price">
                    {currencyFormatter(product.price)}
                  </div>

                  {/* couunter */}
                  <div className="counter flex">
                    <button
                      onClick={() => handleDecrease(product)}
                      className="h-10 w-10 bg-gray-100 border border-gray-300 active:bg-gray-700 active:text-gray-50"
                    >
                      -
                    </button>
                    <span className="h-10 w-10 bg-gray-100 flex justify-center items-center border border-gray-300">
                      {product.cartQuantity}
                    </span>
                    <button className="h-10 w-10 bg-gray-100 border border-gray-300 active:bg-gray-700 active:text-gray-50">
                      +
                    </button>
                  </div>
                  <div className="total-price ml-auto">
                    {currencyFormatter(product.price)}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="cart-lower flex justify-between items-start py-10">
            <button
              onClick={() => dispatch(clearCart())}
              className="clear-btn uppercase border py-3 px-7 hover:bg-rose-200 hover:text-red-600 hover:border-red-200 font-medium rounded-r-lg duration-300"
            >
              Clear cart
            </button>
            <div className="flex flex-col items-start gap-2">
              <div className="top flex justify-between w-full text-2xl font-medium">
                <span className="text-sky-500">Subtotal</span>
                <span className="text-rose-500">999</span>
              </div>
              <p className="text-gray-400">
                taxes and shopping costs are calculated at the checkout
              </p>
              <Link
                to={"/"}
                className="checkout bg-sky-500 w-full py-3 uppercase font-medium text-sky-50 tracking-widest hover:bg-sky-600 duration-300 text-center"
              >
                Checkout
              </Link>
              <Link
                to="/products"
                className="continue uppercase text-sky-500 font-medium tracking-widest flex justify-center items-center gap-2 group"
              >
                <span className="inline-block text-2xl group-hover:-translate-x-3">
                  <BiArrowBack />
                </span>
                continue shopping
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
