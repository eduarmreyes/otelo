/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import axios from 'axios';

import {
  SEND_CONTACT,
  SEND_CONTACT_SUCCESS,
  SEND_CONTACT_ERROR,
} from './constants';

const ROOT_URL = 'https://otelo-api.herokuapp.com';

/**
 * Submit contact form to the back end, this action starts the request saga
 *
 * @return {object} An action object with a type of SEND_CONTACT
 */
export function sendContact(values, callback) {
  const request = axios.post(`${ROOT_URL}/contact`, values)
    .then(() => callback());
  return {
    type: SEND_CONTACT,
    payload: request,
  };
}

/**
 * Dispatched when the contact form is loaded by the request saga
 *
 * @param  {string} status The current status
 *
 * @return {object}      An action object with a type of SEND_CONTACT_SUCCESS passing the repos
 */
export function sendContactSubmitted(status) {
  return {
    type: SEND_CONTACT_SUCCESS,
    status,
  };
}

/**
 * Dispatched when submitting contact form fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of SEND_CONTACT_ERROR passing the error
 */
export function sendContactError(error) {
  return {
    type: SEND_CONTACT_ERROR,
    error,
  };
}
