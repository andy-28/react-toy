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
} from '@fortawesome/free-solid-svg-icons'


const Bar = ({ setShow, size }) => {
  return (
    <nav>
      <div className="nav_box">
        
        <p className="my_shop" onClick={() => setShow(true)}>
          <FontAwesomeIcon icon={faUser} className='btnClose' />
        </p>
        <div className="cart" onClick={() => setShow(false)}>
            <FontAwesomeIcon icon={faUser} className='btnClose' />
          <span>{size}</span>
        </div>
      </div>
    </nav>
  );
};

export default Bar;
