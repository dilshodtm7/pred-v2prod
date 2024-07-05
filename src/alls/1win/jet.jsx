import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Jet from '../../assets/Lucky-Jet.jpg';
import './index.css';

const JetComponent = () => {
    const navigate = useNavigate();
    const Api = "https://pred-v2.onrender.com/auth/sign-in";
    const [id, setId] = useState("");
    const language = localStorage.getItem("country");
    const [buttonText, setButtonText] = useState(getInitialButtonText());

    function getInitialButtonText() {
        switch (language) {
            case "UZ":
                return "KUTING";
            case "ENG":
                return "WAIT";
            default:
                return "Подождите"; // Assuming this is the default language
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setButtonText("Loading...");

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
                localStorage.setItem("image", "Jet");
                navigate("/active");
            } else {
                navigate("/activate");
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            setButtonText(getInitialButtonText());
        });
    };

    return (
        <div className="container">
            <div className="center">
                <form onSubmit={handleSubmit} className='form'>
                    <img src={Jet} className="jets" alt="Jet" />
                    <label className='label'>
                        {language === "UZ" && "1WIN ID kiriting"}
                        {language === "ENG" && "Enter Your 1WIN ID"}
                        {(language !== "UZ" && language !== "ENG") && "Введите Свой 1WIN ID"}
                    </label>
                    <input
                        required
                        type="number"
                        min='40000'
                        max='999999999'
                        onChange={(e) => setId(e.target.value)}
                        className='inputs'
                        placeholder={
                            language === "UZ" ? "1WIN ID kiriting" :
                            language === "ENG" ? "Enter Your 1WIN ID" :
                            "Введите Свой 1WIN ID"
                        }
                    />
                    <button type="submit" className='btn-submit' id="submit-btn">
                        {buttonText}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default JetComponent;
;
