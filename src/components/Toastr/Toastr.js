import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Toastr extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    debugger;
    return (
      <li className="toastr" style={{ backgroundColor: this.props.color }}>
        <p className="toastr__content">
          {this.props.text}
        </p>
        <button className="toastr__dismiss" onClick={this.props.onDismissClick}>
          x
        </button>
      </li>
    );
  }
}

Toastr.propTypes = {
  color: PropTypes.string.isRequired,
  onDismissClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default Toastr;
