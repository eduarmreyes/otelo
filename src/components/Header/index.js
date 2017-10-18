import React from 'react';
import Navbar from '../Navbar';

import LogoLink from './LogoLink';
import Img from './Img';
import NormalHeader from './Header';
import OteloLogoAzul from './Otelo_Logo_Azul.png';
import H2 from './H2';


class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <NormalHeader>
        <LogoLink to="/">
          <Img src={OteloLogoAzul} alt="Otelo Logo Azul" />
        </LogoLink>
        <Navbar />
        <H2>
          Lifestyle and design
          <br />
          showroom suites.
        </H2>
      </NormalHeader>
    );
  }
}

export default Header;
