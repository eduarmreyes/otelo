import PropTypes from 'prop-types';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Toastr from './Toastr';
import { removeToastr } from './actions';

const Toastrs = ({ actions, toastrs }) => {
  const { removeToastr } = actions;
  return (
    <ul className="toastr">
      { toastrs && toastrs.map((toastr) => {
        const { id } = toastr;
        return (
          <Toastr {...toastr} key={id} onDismissClick={() => removeToastr(id)} />
        );
      })}
    </ul>
  );
};

Toastrs.propTypes = {
  actions: PropTypes.shape({
    removeToastr: PropTypes.func.isRequired,
  }).isRequired,
  toastrs: PropTypes.arrayOf(PropTypes.object),
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ removeToastr }, dispatch),
});

const mapStateToProps = (state) => ({
  toastrs: state.toastr,
});

export default connect(mapStateToProps, mapDispatchToProps)(Toastrs);
