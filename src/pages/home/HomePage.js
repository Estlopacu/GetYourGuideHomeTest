import React from 'react';
import {Link} from 'react-router';
import Nav from '../../components/common/Nav';
import Header from '../../components/common/Header';
import Results from '../../components/Results/Results';

const HomePage = () => {
  return (
    <div>
      <Nav/>
      <Header/>
      <Results/>
    </div>
  );
};

export default HomePage;
