import React from "react";
// import { BsThreeDots } from "react-icons/bs";
// import { FaEthereum } from "react-icons/fa";
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { Route, Routes } from "react-router-dom"
import { useState, useEffect } from 'react'
import toy from '../json/toy.json'
import clone from '../json/clone.json'
import styled from "styled-components";
import "../conponents/shop.css";
import ScrollToTop from "react-scroll-to-top";
import { ReactComponent as MySVG } from "../image/capslock.fill.svg";
import Login from "./Login"
import marketplace1 from "../image/01.png";
import marketplace2 from "../image/02.png";
import marketplace3 from "../image/03.png";
import marketplace4 from "../image/04.png";
import marketplace5 from "../image/05.png";
import marketplace6 from "../image/06.png";
import marketplace7 from "../image/07.png";
import marketplace8 from "../image/08.png";
import Button from "./Button";
import ClipLoader from "react-spinners/ClipLoader";
import AddToCart from "../conponents/AddToCart"





export function Pricing(products) {
  const marketPlaceData = [
    {
      id: 1,
      image: marketplace1,
      name: "Aiboi-meta",
      price: 10000
    },
    {
      id: 2,
      image: marketplace2,
      name: "Pedram-mohamm...",
      price: 13000
    },
    {
      id: 3,
      image: marketplace4,
      name: "Daeho-cha",
      price: 13000
    },
    {
      id: 4,
      image: marketplace5,
      name: "Justine-florentino",
      price: 13000
    },
    {
      id: 5,
      image: marketplace6,
      name: "Hoang-l-p-solan",
      price: 13000
    },
    {
      id: 6,
      image: marketplace7,
      name: "Joshua-jay",
      price: 13000
    },
    {
      id: 7,
      image: marketplace8,
      name: "Joshua-jay",
      price: 13000
    },
    {
      id: 8,
      image: marketplace3,
      name: "Eduardo-pena",
      price: 13000
    },
  ];

  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  

  return (

    <>
      <ScrollToTop smooth component={<MySVG />} />
      <h1>Shop</h1>

      <div className="container-box">
      {
        loading ?
          <ClipLoader
            color={'#6F2ADD'}
            loading={loading}

            size={80}

          />
          :
          <div className="marketPlaces">
          {toy.map(({ image1, image2, image3, image4, name, auther, price, item, handleClick}) => {
            return (
              <div className="marketplace">
                <div className="image">
                  <Link to={`/ProductDetail`}>

                    <img src={image1} alt="marketplace" />
                  </Link>

                </div>
                <div className="row">
                  <img src={image2} className="small-img" />
                  <img src={image3} className="small-img" />
                  <img src={image4} className="small-img" />
                </div>
                <div className="name">
                  <h4>{name}</h4>

                </div>
                <h6 className="username">{auther}</h6>

                
                <div className="price-container">
                  <h5 className="price">$ {price}</h5>

                  <button className="add">Add to cart</button>
                  
                  
                </div>
              </div>
            );
          })}
        </div>
      };
        
      </div>

    </>


  );
}

export default Pricing;

