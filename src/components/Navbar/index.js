import React from 'react';

import NormalNavbar from './NavbarStyled';
import Ul from './Ul';
import Li from './Li';
import NavbarLink from './NavbarLink';

class Navbar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <NormalNavbar>
        <Ul>
          <Li>
            <NavbarLink to="#">
              Book a Concept Suite
            </NavbarLink>
            <NavbarLink to="#experiences">
              Experiences
            </NavbarLink>
            <NavbarLink to="#the-network">
              The Network
            </NavbarLink>
            <NavbarLink to="#contact">
              Contact
            </NavbarLink>
          </Li>
        </Ul>
      </NormalNavbar>
    );
  }
}

export default Navbar;
