import React from "react";
import Tgicon from "../assets/tg-icon.png";
import "./index.css";

const index = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer">
          <a className="as" href="https://t.me/AviaBot_admin">
            <button className="btn-footer" >
              <img src={Tgicon} alt="TG" className="tg" />AVIABOT STORE ADMIN
              </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default index;
