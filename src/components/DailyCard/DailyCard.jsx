import React from "react";

const DailyCard = ({ daily }) => {
  
  return (
    <>
      <div className="city__con">
        <p>
          {new Date(daily.dt * 10000).toLocaleString("en-us", {
            weekday: "long",
          })}
        </p>

        <p>
          {new Date(daily.dt * 10000).toLocaleString("en-us", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        <img
          src={require(`../../assets/weatherPhoto/${daily.weather[0].icon}.png`)}
          alt=""
        />

        <div>
        <span>{Math.round(daily.main.temp_max)}°</span>
        <span> - </span>
        <span>{Math.round(daily.main.temp_min)}° C</span>
        </div>
      </div>
    </>
  );
};

export default DailyCard;
