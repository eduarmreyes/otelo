import { ADD_TOASTR, REMOVE_TOASTR } from './constants';

export default function toastrsReducer(state = [], action) {
  const { payload, type } = action;

  switch (type) {
    case ADD_TOASTR:
      return [payload, ...state];

    case REMOVE_TOASTR:
      return state.filter((toastr) => toastr.id !== payload);

    default:
      return state;
  }
}
