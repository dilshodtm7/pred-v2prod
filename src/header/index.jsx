import React, { useEffect, useState } from "react";
import Logo from "../assets/react.svg";



import "./index.css";

function GetCurrentAddress() {
  const [address, setAddress] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    // Function to handle success in getting geolocation
    const handleSuccess = (pos) => {
      const { latitude, longitude } = pos.coords;
      const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;

      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          if (data.address && data.address.country) {
            setAddress(data.address.country);
            updateTime();
          } else {
            setError("Country not found");
          }
        })
        .catch(() => setError("Failed to fetch address"));
    };

    // Function to handle error in getting geolocation
    const handleError = (err) => {
      switch (err.code) {
        case err.PERMISSION_DENIED:
          setError("User denied the request for Geolocation.");
          break;
        case err.POSITION_UNAVAILABLE:
          setError("Location information is unavailable.");
          break;
        case err.TIMEOUT:
          setError("The request to get user location timed out.");
          break;
        case err.UNKNOWN_ERROR:
          setError("An unknown error occurred.");
          break;
        default:
          setError("Unable to retrieve your location");
      }
    };

    // Requesting geolocation access
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
    } else {
      setError("Geolocation is not supported by your browser");
    }
  }, []);

  // Function to update time every second
  const updateTime = () => {
    setInterval(() => {
      const date = new Date();
      setCurrentTime(date.toLocaleTimeString());
    }, 1000); // Update time every second
  };

  // Function to handle country change
  const handleCountryChange = (event) => {
    const selectedCountry = event.target.value;
    if (selectedCountry === "RUS") {
      localStorage.setItem("country", "RUS");
      window.location.reload();

    } else if (selectedCountry === "ENG") {
      localStorage.setItem("country", "ENG");
      window.location.reload();

    } else if (selectedCountry === "UZ") {
      localStorage.setItem("country", "UZ");
      window.location.reload();

    }
  };

useEffect (() => {
if(!localStorage.getItem("country")){
  localStorage.setItem("country", "RUS");
}
}, []);

  return (
    <>
      <div className="header-container">
        <div className="time-zone">
          <p> {address}</p>
          <p> {currentTime}</p>
        </div>

        
<div className="dd">

<select id="mySelect" onChange={handleCountryChange}>
{
  localStorage.getItem("country") === "RUS" ? (
    <option value="RUS" selected disabled>RU</option>
  ) : (
    <option value="RUS">RU</option>
  )
}
{
  localStorage.getItem("country") === "ENG" ? (
    <option value="ENG" selected disabled>ENG</option>
  ) : (
    <option value="ENG">ENG</option>
  )
}
{
  localStorage.getItem("country") === "UZ" ? (
    <option value="UZ" selected disabled>UZ</option>
  ) : (
    <option value="UZ">UZ</option>
  )
}
          </select>
</div>
      
      </div>
    </>
  );
}

export default GetCurrentAddress;
