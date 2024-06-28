import React from "react";

const activate = () => {
const language = localStorage.getItem("country");

if (language === "RUS") {
  return (
    <>
      <div className="container-reg">
      <span className='spans'>У вас нет разрешения для использование бота</span>
        
        <hr className="hrr" />
        <span className="spans">Купить</span>
        <div className="d-blocked">
        <a href="" className="a">
          <button className="btn-buy">15 - Дней  : 1500 Рубль</button>
        </a>
        <a href="" className="a">
          <button className="btn-buy">20 - Дней  : 2000 Рубль</button>
        </a>
        <a href="" className="a">
          <button className="btn-buy">30 - Дней : 3000 Рубль</button>
        </a>
        <a href="" className="a">
          <button className="btn-buy">50 - Дней : 4000 Рубль</button>
        </a>
        <a href="" className="a">
          <button className="btn-buy">60 - Дней : 5000 Рубль</button>
        </a>
        <a href="" className="a">
          <button className="btn-buy">90 - Дней : 7000 Рубль</button>
        </a>
        </div>
      </div>
    </>
  );
}

if (language === "ENG") {
  return (
    <>
      <div className="container-reg">
      <span className='spans'>You do not have permission to use the bot</span>
        
        <hr className="hrr" />
        <span className="spans">BUY</span>
        <div className="d-blocked">
        <a href="" className="a">
          <button className="btn-buy">15 - day : 15 $</button>
        </a>
        <a href="" className="a">
          <button className="btn-buy">20 - day : 20 $</button>
        </a>
        <a href="" className="a">
          <button className="btn-buy">30 - day : 30 $</button>
        </a>
        <a href="" className="a">
          <button className="btn-buy">50 - day : 40 $</button>
        </a>
        <a href="" className="a">
          <button className="btn-buy">60 - day : 50 $</button>
        </a>
        <a href="" className="a">
          <button className="btn-buy">90 - day : 70 $</button>
        </a>
        </div>
      </div>
    </>
  );
}

  return (
    <>
      <div className="container-reg">
      <span className='spans'>Sizda botdan foydalanish uchun ruxsat yo'q</span>
        
        <hr className="hrr" />
        <span className="spans">SOTIB OLISH</span>
        <div className="d-blocked">
        <a href="" className="a">
          <button className="btn-buy">15 - kun uchun : 200 000 so'm</button>
        </a>
        <a href="" className="a">
          <button className="btn-buy">20 - kun uchun : 250 000 so'm</button>
        </a>
        <a href="" className="a">
          <button className="btn-buy">30 - kun uchun : 350 000 so'm</button>
        </a>
        <a href="" className="a">
          <button className="btn-buy">50 - kun uchun : 500 000 so'm</button>
        </a>
        <a href="" className="a">
          <button className="btn-buy">60 - kun uchun : 600 000 so'm</button>
        </a>
        <a href="" className="a">
          <button className="btn-buy">90 - kun uchun : 750 000 so'm</button>
        </a>
        </div>
      </div>
    </>
  );
};

export default activate;
