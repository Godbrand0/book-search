import React from "react";
import Header from "../../pages/Header/Header";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  );
};

export default Home;
