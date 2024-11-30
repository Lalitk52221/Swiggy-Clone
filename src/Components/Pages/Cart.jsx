import React from "react";
import { MdCurrencyRupee } from "react-icons/md";
import { useSelector } from "react-redux";

const CartSummary = () => {
  const cart = useSelector((state) => state.cart);

  const cartItems = Object.values(cart);
  const cartTotal = Object.values(cart).reduce((total,item)=>{
    return total + (item.quantity ||0)
  },0)
  const totalPrice = Object.values(cart).reduce((total,item)=> {
  const quantity = item.quantity||0;
  const price = item.price||0;
  return total + (quantity * price);
    },0)
console.log(cartItems)
  return (
    <div className="lg:px-10">
      <h1 className="font-semibold text-orange-600 lg:text-xl xs:text-base underline pb-4">Total Cart Items : {cartTotal}</h1>
      <h2 className="lg:text-2xl xs:text-xl font-bold underline">Cart Summary</h2>
      {cartItems.length > 1 ? (
        <ul>
          {cartItems.filter((item) => item.quantity > 0).map((item, index) => (
            <li key={index} className="flex justify-between py-2 border-b-2">
              <p>{item.name}</p>
              <p className="flex items-center gap-0">{item.quantity} x <MdCurrencyRupee/>{item.price}</p>
            </li>
          ))}
          <li className="flex justify-between py-2 px-10 font-bold border-b-2">
            <p>Total Price</p>
            <p>₹{totalPrice}</p>
          </li>
        </ul>
      ) : (
        <p className="font-bold text-xl text-gray-500">Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartSummary;
