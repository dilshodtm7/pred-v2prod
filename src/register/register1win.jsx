import React from "react";
import Register from "../assets/REGISTER.jpg";
import Deposite from "../assets/deposit.jpg";
import Adminga from "../assets/admin.jpg";
import "./index.css";

const register1win = () => {
  return (
   <>
    <div className="container-reg">
     

     <div className="register-container"> 
       <span className="spans">SIZNING ID RAQAMINGIZ BOTDAN RO'YXATDAN O'TMAGAN</span>
     <hr className="hr" />
       <h2>
         Botdan 100% foydalanish uchun ushbu havola orqali royxatdan o'ting{" "}
       </h2>
       <a href="https://vercel.app">👉👉👉👉 RO'YXATDAN O'TISH 👈👈👈👈</a>
       <h2>Promokod degan joyiga</h2>
       <h2>SASASA </h2>
       <h2>Promokodini kiriting</h2>
       <img src={Register} className="registerimg" alt="" />
     </div>
     <h2>
       va hisobingizga kamida 500 ming sum miqdorda to'ldiring 
       
       
     </h2>
     <img src={Deposite} className="registerimg" alt="" />


     <h2>shundan so'ng
       screenshot qilib 
   <a href="https://vercel.app"> adminga</a>     yuboring </h2>
     <img src={Adminga} className="registerimg" alt="" />

       <h2>
       manabu xolatda va sizga admin botdan to'liq
       foydalanish uchun dostup beradi.
       </h2>
 
   </div></>
  );
};

export default register1win;
