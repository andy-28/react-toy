import React, { useState, useEffect } from "react";

import toy from '../json/toy.json'
import Cards from "./card";
import "../conponents/amazon.css";
import ClipLoader from "react-spinners/ClipLoader";

const Amazon = ({ handleClick }) => {

  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])
  
  return (
    <>
    
    <div className="container-box">
    {
      loading ?
          <ClipLoader
            color={'#6F2ADD'}
            loading={loading}

            size={80}

          />
          :
      <div className="container">
        {toy.map((item) => (
          <Cards key={item.id} item={item} handleClick={handleClick} />
        ))}
      </div>
    }

    </div>
    </>
    
  );
};

export default Amazon;
