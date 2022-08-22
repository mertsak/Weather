import React from "react";

import SideBar from "./components/SideBar/SideBar";
import Content from "./components/Content/Content";

import { useSelector } from "react-redux";

import Loading from "./components/Loading/Loading.jsx";

const App = () => {
  const loading = useSelector((state) => state.weather.loading);

  return (
    <>
      {loading && <Loading></Loading>}

      <div className="app_con">
        <SideBar></SideBar>
        <Content></Content>
      </div>
    </>
  );
};

export default App;
