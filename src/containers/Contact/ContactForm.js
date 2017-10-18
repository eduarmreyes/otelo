import React from 'react';
import { Field, reduxForm } from 'redux-form/immutable';
import Input from './Input';
import Textarea from './Textarea';
import Button from './Button';
import SpanInput from './SpanInput';
import validate from './validateForm';

const renderField = ({ input, placeholder, name, type }) => (
  <SpanInput>
    <Input
      type={type}
      name={name}
      placeholder={placeholder}
      {...input}
    />
  </SpanInput>
);

renderField.propTypes = {
  input: React.PropTypes.object,
  placeholder: React.PropTypes.string,
  name: React.PropTypes.string,
  type: React.PropTypes.string,
};

const renderTextarea = ({ input, placeholder, name, type }) => (
  <Textarea
    type={type}
    name={name}
    placeholder={placeholder}
    {...input}
  >
  </Textarea>
);

renderTextarea.propTypes = {
  input: React.PropTypes.object,
  placeholder: React.PropTypes.string,
  name: React.PropTypes.string,
  type: React.PropTypes.string,
};

const ContactForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form
      id="contact-form"
      name="contact-form"
      onSubmit={handleSubmit}
      noValidate
    >
      <Field
        type="text"
        placeholder="NAME"
        name="name"
        id="name"
        component={renderField}
      />
      <Field
        type="text"
        placeholder="LAST NAME"
        name="last_name"
        id="last_name"
        component={renderField}
      />
      <Field
        type="email"
        placeholder="EMAIL"
        name="email"
        id="email"
        component={renderField}
      />
      <Field
        columns="600"
        placeholder="MESSAGE"
        name="message"
        id="message"
        component={renderTextarea}
      />
      <Button
        type="submit"
      >
        SUBMIT
      </Button>
    </form>
  );
};

ContactForm.propTypes = {
  handleSubmit: React.PropTypes.func,
};

export default reduxForm({
  form: 'contactForm',
  validate,
})(ContactForm);
