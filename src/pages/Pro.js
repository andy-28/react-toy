import React, { useState, useEffect } from "react";
import Amazon from "../Cart/amazon";
import Bar from "../Cart/bar";
import Cart from "../Cart/cart";



const Pro = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  // useEffect(() => {
  //   console.log("cart change");
  // }, [cart]);

  return (
    <React.Fragment>
    <Bar setShow={setShow} size={cart.length} />
    {show ? (
      
      <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
    ) : (
      <Amazon handleClick={handleClick} />
      
    )}
  </React.Fragment>
  );
};

export default Pro;
