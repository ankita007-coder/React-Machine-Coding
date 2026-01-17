import React from "react";
import { useCart } from "../context/CartProvider";

const CartItem = ({ name, qty = 1, image, price, id, stock }) => {
  const { updateQuantity, removeItem } = useCart();

  const handleIncrement = () => {
    if (qty >= stock) {
      alert("No more stock available");
      return;
    }
    updateQuantity(id, qty + 1);
  };
  const handleDecrement = () => {
    if (qty > 1) {
      updateQuantity(id, qty - 1);
    } else {
      alert("Quantity cannot be less than 1");
    }
  };
  const handleRemove = () => {
    removeItem(id);
  };
  return (
    <div className="product-card">
      <div>
        <img src={image} alt="" loading="lazy" />
      </div>
      <div className="product-details">
        <div className="prod-name">
          <h4>{name}</h4>
          <button onClick={handleRemove}>Remove</button>
        </div>

        <p>Rs. {price}</p>
        <div className="quantity">
          <button onClick={handleDecrement}>-</button>
          <p>{qty}</p>
          <button onClick={handleIncrement}>+</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
