import React from "react";
import { MdCurrencyRupee } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CartSummary = () => {
  const cart = useSelector((state) => state.cart);

  const cartItems = Object.values(cart);
  const cartTotal = Object.values(cart).reduce((total, item) => {
    return total + (item.quantity || 0);
  }, 0);
  const totalPrice = Object.values(cart).reduce((total, item) => {
    const quantity = item.quantity || 0;
    const price = item.price || 0;
    return total + quantity * price;
  }, 0);
  console.log(cartItems);
  return (
    <div className="lg:px-10 h-full min-h-screen">
      <h1 className="font-semibold text-orange-600 lg:text-xl xs:text-base underline pb-4">
        Total Cart Items : {cartTotal}
      </h1>
      <h2 className="lg:text-2xl xs:text-xl font-bold underline py-4">
        Cart Summary
      </h2>
      {cartItems.length > 2 ? (
        <div>
          <ul>
            {cartItems
              .filter((item) => item.quantity > 0)
              .map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between py-2 border-b-2"
                >
                  <p>{item.name}</p>
                  <p className="flex items-center gap-0">
                    {item.quantity} x <MdCurrencyRupee />
                    {item.price}
                  </p>
                </li>
              ))}
            <li className="flex justify-between pt-6 font-bold border-b-2">
              <p>Total Price</p>
              <p>₹{totalPrice}.00</p>
            </li>
          </ul>
          <Link to={"/address"}>
          <button className="bg-orange-600 rounded py-4 px-6 w-full my-20 font-bold text-xl">Confirm Order</button>
          </Link>
        </div>
      ) : (
        <p className="font-bold text-xl text-gray-500">Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartSummary;
