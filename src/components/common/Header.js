import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import SearchForm from '../SearchForm/SearchForm';

const Header = () => {
  return (
    <div className="d-flex justify-content-center align-items-center header">
      <div className="text-center p-4 rounded">
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
