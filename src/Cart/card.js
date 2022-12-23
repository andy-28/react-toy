import React from "react";
import toy from '../json/toy.json'
import "../conponents/shop.css";

const Cards = ({ item, handleClick }) => {
  const { auther, name, price, image1, image2, image3, image4 } = item;
  return (
    <>
    
    <div className="marketplace">
      <div className="image_box">
        <img src={image1} alt="" />
      </div>
      <div className="row">
        <img src={image2} className="small-img" />
        <img src={image3} className="small-img" />
        <img src={image4} className="small-img" />
      </div>
      <div className="name">
        <h3>{name}</h3>
      </div>
      <h6 className="username">{auther}</h6>

      <div className="price-container">
        <h5 className="price">$ {price}</h5>

        <button className="add" onClick={() => handleClick(item)}>
          Add to Cart
        </button>
      </div>
    </div>
    </>
    
  );
};

export default Cards;

// id, title, autor, price, img
