import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Avia from '../../assets/avi.png';
import './index.css';

const Aviator = () => {
    const navigate = useNavigate();
    const Api = "https://pred-v2.onrender.com/auth/sign-in";
    const [id, setId] = useState("");
    const language = localStorage.getItem("country");

    const handleSubmit = (e, buttonId, loadingText) => {
        e.preventDefault();
        const button = document.getElementById(buttonId);
        button.innerHTML = loadingText;
        
        fetch(Api, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id }),
        })
        .then((response) => response.json())
        .then((data) => {
            if (data.status === 201) {
                localStorage.setItem("token", 'bearer');
                localStorage.setItem("image", "Avia");
                navigate("/active");
            } else {
                navigate("/activation");
            }
        });
    };

    const renderForm = (label2, buttonText, buttonId, loadingText) => (
        <div className="container">
            <div className="center">
                <form onSubmit={(e) => handleSubmit(e, buttonId, loadingText)} className='form'>
                    <img src={Avia} className="jets" alt="Avia" />
                   <label htmlFor="" className='label'>MELBET ID</label>
                    <input type="number" required min="40000" max="999999999" className='inputs' placeholder={label2} onChange={(e) => setId(e.target.value)} />
                    <button type="submit" className='btn-submit' id={buttonId}>{buttonText}</button>
                </form>
            </div>
        </div>
    );

    if (language === "UZ") {
        return renderForm( "ID kiriting", "Kirish", "btn-submit-uz", "KUTING");
    }

    if (language === "ENG") {
        return renderForm("Enter Your ID", "Submit", "btn-submit-eng", "WAIT");
    }

    return renderForm( "Введите Свой ID", "Вход", "btn-submit-rus", "Подождите");
        
};

export default Aviator;
