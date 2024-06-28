import React, { useEffect } from "react";
import Avia from "../../assets/avi.png";
import Rocket from "../../assets/796987.png";
import Jet from "../../assets/Lucky-Jet.jpg";
import "./index.css";

const IndexActive = () => {
  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(1);
    max = Math.floor(9);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const wla = () => {
    const x = Math.floor(Math.random() * 99 + 1);
    const y = getRandomIntInclusive();
    const z = `${y}.${x}`;
    return [y, z];
  };

  useEffect(() => {
    const [intervalMultiplier, luckyText] = wla();
    const intervalTime = {
      1: 3000,
      2: 3000,
      3: 2700,
      4: 2500,
      5: 2000,
      6: 2000,
      7: 2000,
      8: 1600,
      9: 1800,
    }[intervalMultiplier] * intervalMultiplier;

    const interval = setInterval(() => {
      if (localStorage.getItem("token")) {
        document.getElementById("lucky").textContent = luckyText;
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  const imageMap = {
    Avia: Avia,
    Jet: Jet,
    Rocket: Rocket,
  };

  const Image = localStorage.getItem("image");
  const imgSrc = imageMap[Image] || Rocket;

  return (
    <>
      <div className="container-avia">
        <img src={imgSrc} className="jets" alt="" />
        <div className="loader">
          <div className="plane">
            <img src="/src/alls/1win/4820.gif" className="plane-img" alt="loading plane" />
          </div>
          <div className="earth-wrapper">
            <h3 className="lucky-text" id="lucky">
              Wait
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndexActive;
