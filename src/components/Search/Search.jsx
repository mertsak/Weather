import { useState, useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchGetCity,
  fetchWeatherData,
} from "../../redux/WeatherSlice/service";

// REACT ICONS

import { IoMdLocate } from "react-icons/io";

const Search = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const coord = useSelector((state) => state.weather.getCityCoord);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchGetCity(search));
    setSearch("");
  };

  useEffect(() => {
    dispatch(fetchWeatherData(coord));
  }, [dispatch, coord]);

  return (
    <>
      <div className="search__con">
        <BiSearch className="search__icon" size={20} />
        <form onSubmit={handleSubmit}>
          <input
            autoFocus
            className="search__bar"
            placeholder="Search for places..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>

        <IoMdLocate className="location__icon" size={20} />
      </div>
    </>
  );
};

export default Search;
