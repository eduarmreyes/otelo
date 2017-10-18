/*
 * Contact constants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const SEND_CONTACT = 'Otelo/Contact/SEND_CONTACT';
export const SEND_CONTACT_SUCCESS = 'Otelo/Contact/SEND_CONTACT_SUCCESS';
export const SEND_CONTACT_ERROR = 'Otelo/Contact/SEND_CONTACT_ERROR';
