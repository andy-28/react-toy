import { Link, useMatch, useResolvedPath } from "react-router-dom"
import React from "react";
import "../conponents/navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleChevronLeft,
  faCircleChevronRight,
  faPlusSquare,
  faBookmark,
  faCartShopping,
  faUser,
  faHome,
  faRefresh,
  faQuestionCircle
} from '@fortawesome/free-solid-svg-icons'


const Bar = ({ setShow, size }) => {
  return (
    <nav>
      <div className="nav_box">
        
        <p className="my_shop" onClick={() => setShow(true)}>
          <FontAwesomeIcon icon={faQuestionCircle} className='btnClose' />
        </p>
        <h1 onClick={() => setShow(true)}>Shop</h1>
        <div className="cart" onClick={() => setShow(false)}>
            <FontAwesomeIcon icon={faCartShopping} className='btnClose' />
          <span>{size}</span>
        </div>
      </div>
    </nav>
  );
};

export default Bar;
