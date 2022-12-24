import React, { useState, useEffect } from "react";

import toy from '../json/toy.json'
import Cards from "./card";
import "../conponents/amazon.css";
import ClipLoader from "react-spinners/ClipLoader";
import ScrollToTop from "react-scroll-to-top";
import { ReactComponent as MySVG } from "../image/capslock.fill.svg";




const Amazon = ({ handleClick }) => {

  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])
  
  return (
    <>
    <ScrollToTop smooth component={<MySVG />} />
    <div className="row2">
        <h4>盲盒玩具</h4>
        <h4>樹脂玩具</h4>
        <h4>搪膠玩具</h4>
        <h4>日本軟膠</h4>
        <h4>可動人偶</h4>

      </div>
    <div className="container">
    {
      loading ?
          <ClipLoader
            color={'#6F2ADD'}
            loading={loading}

            size={80}

          />
          :
      <div className="container-box">
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
