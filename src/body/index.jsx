import React, { useState, useEffect } from "react";
import Jet from "../assets/Lucky-Jet.jpg";
import Avia from "../assets/avi.png";
import Rocket from "../assets/796987.png";
import "./index.css";
import { Link } from "react-router-dom";

const index = () => {






const language = localStorage.getItem("country");


 
 if(language === "RUS"){
  return (
    <div className="container">
      <span className="spans">1WIN Взлом</span>
      <div className="d-flexbtn">
        <Link to="/1win/jet">
        <button className="btn">
          <img src={Jet} className="jet" alt="" />
        </button>
        </Link>

        <Link to="/1win/aviator">
        <button className="btn">
          <img src={Avia} className="jet" alt="" />
        </button>
        </Link>

        <Link to="/1win/rocket">
        <button className="btn">
          <img src={Rocket} className="jet" alt="" />
        </button>
        </Link>
      </div>
      <hr className="hrr"/>

      <span className="spans">Все Букмекер</span>
      <div className="d-flexbtn">
        <Link to="/aviator">
        <button className="btn">
          <img src={Avia} className="jet" alt="" />
        </button>
        </Link>

      </div>
    </div>
  );

 }
 
 else if(language === "ENG"){

  return (
    <div className="container">
      <span className="spans">1WIN HACK</span>
      <div className="d-flexbtn">
        <Link to="/1win/jet">
        <button className="btn">
          <img src={Jet} className="jet" alt="" />
        </button>
        </Link>

        <Link to="/1win/aviator">
        <button className="btn">
          <img src={Avia} className="jet" alt="" />
        </button>
        </Link>

        <Link to="/1win/rocket">
        <button className="btn">
          <img src={Rocket} className="jet" alt="" />
        </button>
        </Link>
      </div>
      <hr className="hrr"/>

      <span className="spans">ALL BookMaker</span>
      <div className="d-flexbtn">
        <Link to="/aviator">
        <button className="btn">
          <img src={Avia} className="jet" alt="" />
        </button>
        </Link>

      </div>
    </div>
  );
 } 






  return (
    <div className="container">
      <span className="spans">1WIN O'YINLARI UCHUN</span>
      <div className="d-flexbtn">
        <Link to="/1win/jet">
        <button className="btn">
          <img src={Jet} className="jet" alt="" />
        </button>
        </Link>

        <Link to="/1win/aviator">
        <button className="btn">
          <img src={Avia} className="jet" alt="" />
        </button>
        </Link>


        <Link to="/1win/rocket">
        <button className="btn">
          <img src={Rocket} className="jet" alt="" />
        </button>
        </Link>
      </div>
      <hr className="hrr"/>

      <span className="spans">BARCHA BookMaker</span>
      <div className="d-flexbtn">
        <Link to="/aviator">
        <button className="btn">
          <img src={Avia} className="jet" alt="" />
        </button>
        </Link>

      </div>
    </div>
  );
};

export default index;
