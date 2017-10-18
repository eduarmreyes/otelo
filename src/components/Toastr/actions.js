import createToastr from './factories';
import {
  ADD_TOASTR,
  REMOVE_TOASTR,
} from './constants';

export function addToastr(options = {}) {
  return {
    payload: createToastr(options),
    type: ADD_TOASTR,
  };
}

export function removeToastr(id) {
  return {
    payload: id,
    type: REMOVE_TOASTR,
  };
}
