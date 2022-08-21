import React, { useEffect } from "react";
import { BsMoonStars } from "react-icons/bs";

import { handleDarkMode } from "../../redux/themeSlice/themeSlice";

// REACT ICONS
import { WiHumidity } from "react-icons/wi";
import { ImLocation2 } from "react-icons/im";
import { WiBarometer } from "react-icons/wi";
import { MdVisibility } from "react-icons/md";
import { BsSun } from "react-icons/bs";
import DailyCard from "../DailyCard/DailyCard";
import { useSelector, useDispatch } from "react-redux";

const Content = () => {
  const dispatch = useDispatch();
  const getCityData = useSelector((state) => state.weather.getCityData);
  const dark = useSelector((state) => state.theme.dark);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  const wind_speed = getCityData[0].wind.speed;
  const humidity = getCityData[0].main.humidity;
  const pressure = getCityData[0].main.pressure;
  const visibility = getCityData[0].visibility;

  return (
    <>
      <div className="content__con">
        <div className="content__header">
          <p>Week</p>
          <span onClick={() => dispatch(handleDarkMode())}>
            {dark ? <BsSun></BsSun> : <BsMoonStars></BsMoonStars>}
          </span>
        </div>

        <div className="dailycard__con">
          {getCityData.slice(1).map((daily, index) => (
            <DailyCard key={index} daily={daily}></DailyCard>
          ))}
        </div>

        <div className="daily__highlights__con">
          <h2>Today's Highlights</h2>

          <div className="daily__highlights__box">
            <div className="highlights__item">
              <span className="highlight__header">Humidity</span>

              <div className="highlights__content">
                <span className="humidity">
                  <WiHumidity />
                </span>
                <p className="highlights__text">
                  {humidity}
                  <span>%</span>
                </p>
              </div>
            </div>

            <div className="highlights__item">
              <span className="highlight__header">Wind Status</span>

              <div className="highlights__content">
                <span className="wind">
                  <ImLocation2 />
                </span>
                <p className="highlights__text">
                  {wind_speed}
                  <span>km/s</span>
                </p>
              </div>
            </div>
          </div>

          <div className="daily__highlights__box">
            <div className="highlights__item">
              <span className="highlight__header">Pressure</span>

              <div className="highlights__content">
                <span className="barometer">
                  <WiBarometer />
                </span>
                <p className="highlights__text">
                  {pressure}
                  <span>hPa</span>
                </p>
              </div>
            </div>

            <div className="highlights__item">
              <span className="highlight__header">Visibility</span>

              <div className="highlights__content">
                <span className="visibility">
                  <MdVisibility />
                </span>
                <p className="highlights__text">
                  {visibility}
                  <span>m</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
