import React, { useState, useEffect } from "react";

import "../conponents/cart.css";

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += 1 * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <article>
      {cart.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.image1} alt="" />
            <p className="name">{item.name}</p>
          </div>
          <div>
            
          </div>
          <div className="row">
            <p className="price">NT $ {item.price}</p>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="total">
        <p className="price"> Total Price of your Cart</p>
        <p className="price">NT $ {price}</p>
      </div>
    </article>
  );
};

export default Cart;
