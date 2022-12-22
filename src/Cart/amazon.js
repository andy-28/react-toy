import React, { useState } from "react";

import toy from '../json/toy.json'
import Cards from "./card";
import "../conponents/amazon.css";

const Amazon = ({ handleClick }) => {
  return (
    <div className="container-box">
     
        {toy.map((item) => (
          <Cards key={item.id} item={item} handleClick={handleClick} />
        ))}
      
     
    </div>
  );
};

export default Amazon;
