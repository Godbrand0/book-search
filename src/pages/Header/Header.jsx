import React from "react";
import Navbar from "../Navbar/Navbar";
import SearchForm from "../searchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className="holder">
      <header className="header">
        <Navbar />
        <div className="header-content flex flex-center text-center ">
          <h2 className="header-title text-capitalize">
            find your book of choice
          </h2>
          <br />
          <p className="header fs-18 fw-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Dignissimos explicabo porro iusto! Laborum nihil magnam praesentium
            aperiam. Expedita quam aut iure mollitia! Dolorem, autem voluptatum.
          </p>
          <SearchForm />
        </div>
      </header>
    </div>
  );
};

export default Header;
