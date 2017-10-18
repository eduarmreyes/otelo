/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import Jumbotron from '../Jumbotron';
import Welcome from '../Welcome';
import FeaturedStays from '../FeaturedStays';
import TheNetwork from '../TheNetwork';
import UpcomingDestinations from '../UpcomingDestinations';
import Footer from '../Footer';

import React from 'react';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Jumbotron />
        <Welcome />
        <FeaturedStays />
        <TheNetwork />
        <UpcomingDestinations />
        <Footer />
      </div>
    );
  }
}
