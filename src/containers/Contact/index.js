import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reset } from 'redux-form';

import FaInstagram from 'react-icons/lib/fa/instagram';
import FaSnapchatGhost from 'react-icons/lib/fa/snapchat-ghost';
import FaFacebook from 'react-icons/lib/fa/facebook';
import FaTwitter from 'react-icons/lib/fa/twitter';

import { addToastr } from '../Toastr/actions';
import { sendContact } from './actions';

import Section from './Section';
import P from './P';
import Span from './Span';
import IconsWrapper from './IconsWrapper';
import FormWrapper from './FormWrapper';
import InfoWrapper from './InfoWrapper';
import SpanInfo from './SpanInfo';
import SectionMark from './SectionMark';
import ContactForm from './ContactForm';

export class Contact extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      contactFormTitle: null,
    };
    this.handleShowToastr = this.handleShowToastr.bind(this);
  }

  componentDidMount() {
    this.renderContactFormTitle();
  }

  handleShowToastr() {
    const a = this.props.actions.addToastr({ text: 'Hello, World!' });
    console.log(a);
  }

  renderContactFormTitle() {
    this.setState({
      contactFormTitle: this.props.contactFormTitle,
    });
  }

  render() {
    return (
      <Section>
        <P>
          { this.state.contactFormTitle }
        </P>
        <IconsWrapper>
          <Span>
            <FaInstagram size="27" />
          </Span>
          <Span>
            <FaFacebook size="27" />
          </Span>
          <Span>
            <FaSnapchatGhost size="27" />
          </Span>
          <Span>
            <FaTwitter size="27" />
          </Span>
        </IconsWrapper>
        <FormWrapper>
          <ContactForm onSubmit={this.props.onSubmitForm} />
          <button onClick={this.handleShowToastr}>Dispatch</button>
        </FormWrapper>
        <InfoWrapper>
          <SpanInfo>
            info@otelo.com
          </SpanInfo>
          <SpanInfo>
            1-800 373-3782
            <br />
            CR + 506 4635-2781
          </SpanInfo>
        </InfoWrapper>
        <SectionMark>
          &copy; Otelo Group LTDA
        </SectionMark>
      </Section>
    );
  }
}

Contact.propTypes = {
  contactFormTitle: React.PropTypes.string,
  onSubmitForm: React.PropTypes.func,
  actions: React.PropTypes.shape({
    addToastr: React.PropTypes.func.isRequired,
  }).isRequired,
};

export function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ addToastr }, dispatch),
    onSubmitForm: (values) => {
      dispatch(sendContact(values, () => {
        dispatch(reset('contactForm'));
        dispatch(addToastr({ text: 'Cosito' }));
      }));
    },
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(null, mapDispatchToProps)(Contact);
