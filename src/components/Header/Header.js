import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import SearchForm from '../SearchForm/SearchForm';
import './Header.scss';
const pathToImages = require.context("../../static/img");

const Header = () => {
  const bgSrc = pathToImages(`./banner${Math.floor((Math.random() * 3) + 1)}.jpg`, true);
  return (
    <div className="d-flex justify-content-center align-items-center header" style={{backgroundImage: `url(${bgSrc})`}}>
      <div className="text-center p-4 mt-5 mb-5 rounded">
          <h1>Get Your Guide</h1>
          <h4>Amet cupidatat duis exercitation cupidatat nisi amet id qui non.</h4>
          <div className="d-flex justify-content-center p-4">
            <SearchForm/>
          </div>
      </div>
    </div>
  );
};

export default Header;
