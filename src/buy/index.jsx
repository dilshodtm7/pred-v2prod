import React from "react";
import Click from "../assets/click.jpg";
import Payme from "../assets/payme.jpg";
import Perfect from "../assets/perfects.png";
import Payeer from "../assets/payeer.jpg";
import Binance from "../assets/binance.png";
import Usdt from "../assets/usdt-trc.webp";
import Bitcoin from "../assets/bitcoins.webp";
import Mir from "../assets/mir.jpg";
import Mbank from "../assets/mbank.png";
import Dcity from "../assets/dcity.png";
import "./index.css";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <div className="container-reg">
      
      <span className="spans">Payment methods</span>
      <div className="d-flexbtn">
        <Link to="/1win/jet">
        <button className="btns">
          <img src={Click} className="jet" alt="" />
          <span className="spans">Click up</span>
        </button>
        </Link>

        <Link to="/1win/aviator">
        <button className="btns">
          <img src={Payme} className="jet" alt="" />
          <span className="spans">Payme


          </span>

        </button>
        </Link>


        <Link to="/1win/rocket">
        <button className="btns">
          <img src={Perfect} className="jet" alt="" />
          <span className="spans">Perfect money</span>

        </button>
        </Link>
        <Link to="/1win/rocket">
        <button className="btns">
          <img src={Mir} className="jet" alt="" />
          <span className="spans">Mir</span>

        </button>
        </Link>
        <Link to="/1win/rocket">
        <button className="btns">
          <img src={Mbank} className="jet" alt="" />
          <span className="spans">Mbank</span>

        </button>
        </Link>
        <Link to="/1win/rocket">
        <button className="btns">
          <img src={Dcity} className="jet" alt="" />
          <span className="spans">Dcity</span>

        </button>
        </Link>
   
        <Link to="/aviator">
        <button className="btns">
          <img src={Payeer} className="jet" alt="" />
          <span className="spans">Payeer</span>

        </button>
        </Link>
        <Link to="/1win/rocket">
        <button className="btns">
          <img src={Binance} className="jet" alt="" />
          <span className="spans">Binance</span>

        </button>
        </Link>
   
        <Link to="/aviator">
        <button className="btns">
          <img src={Usdt} className="jet" alt="" />
          <span className="spans">Usdt trc-20</span>

        </button>
        </Link>
        <Link to="/1win/rocket">
        <button className="btns">
          <img src={Bitcoin} className="jet" alt="" />
          <span className="spans">Bitcoin</span>

        </button>
        </Link>
      </div>
    </div>
  );
};

export default index;
