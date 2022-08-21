import React from "react";

import Search from "../Search/Search";

// REACT İCONS
import { BsThermometerSun } from "react-icons/bs";
import { AiOutlineCloud } from "react-icons/ai";

// REDUX
import { useSelector } from "react-redux";

// MOMENTJS
import moment from "moment";

const SideBar = () => {
  const getCityData = useSelector((state) => state.weather.getCityData);
  const getCityName = useSelector((state) => state.weather.getCityName);

  const Icon = getCityData[0].weather[0].icon;
  const temp = getCityData[0].main.temp;
  const feels_like = getCityData[0].main.feels_like;
  const cloudly = getCityData[0].clouds.all;

  return (
    <div className="side__bar">
      <div className="search__con">
        <Search></Search>
      </div>

      <div className="weather__img">
        <img src={require(`../../assets/weatherPhoto/${Icon}.png`)} alt="" />
      </div>

      <div className="weather__data">
        <div className="weather__temp">
          {Math.floor(temp)}
          <span className="degree">°</span>
          <span className="celcius">C</span>
        </div>

        <div className="weather__day">
          <span>{moment().format("dddd")}</span>,
          <span className="time">{moment().format("LT")}</span>
        </div>

        <div className="weather__feels">
          <div className="weather__like">
            <BsThermometerSun size={20} />
            <span>Feels like {Math.round(feels_like)} ° C</span>
          </div>

          <div className="weather__cloudly">
            <AiOutlineCloud size={20} />
            <span>Cloudly - {cloudly}%</span>
          </div>
        </div>
      </div>

      <div className="weather__city__img">
        <div className="overlay"></div>

        <div className="img__box">
          <img
            src={require(`../../assets/CountyPhoto/photo${Math.floor(
              Math.random() * 10
            )}.jpg`)}
            alt=""
          />

          <span className="city__name">{getCityName}</span>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
