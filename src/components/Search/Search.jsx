import { useState, useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchGetCity,
  fetchWeatherData,
} from "../../redux/WeatherSlice/service";

// REACT ICONS

import { IoMdLocate } from "react-icons/io";

import Loading from "../Loading/Loading";
import Error from "../Error/Error";

const Search = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const name = useSelector((state) => state.weather.getCityName);
  const coord = useSelector((state) => state.weather.getCityCoord);
  const loading = useSelector((state) => state.weather.loading);
  const error = useSelector((state) => state.weather.error);

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
      {error && !loading && <Error></Error>}

      {loading === true ? (
        <Loading></Loading>
      ) : (
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
      )}
    </>
  );
};

export default Search;
