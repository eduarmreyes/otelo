import { fromJS } from 'immutable';

import { SEND_CONTACT } from './constants';

const initialState = fromJS({});

function contactReducer(state = initialState, action) {
  switch (action.type) {
    case SEND_CONTACT:
      return state;
    default:
      return state;
  }
}

export default contactReducer;
