const validate = (values) => {
  // IMPORTANT: values is an ImmutableMap here!
  const errors = {};
  const emailRE = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!values.email) {
    errors.email = 'Required';
  }

  if (!values.name) {
    // Key string for error
    errors.name = 'Required';
  }

  if (!values.last_name) {
    // Key string for error
    errors.last_name = 'Required';
  }

  if (!values.message) {
    // Key string for error
    errors.message = 'Required';
  }

  if (values.email && !emailRE.test(values.email)) {
    errors.email = 'Invalid';
  }

  return errors;
};

export default validate;
