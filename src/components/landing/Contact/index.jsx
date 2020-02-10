import contact from 'assets/illustrations/contact.svg';
import { Container } from 'components/common';
import React from 'react';
import ContactForm from './ContactForm';
import { Details, Thumbnail, Wrapper } from './styles';

export const Contact = () => (
  <Wrapper as={Container} id="contact">
    <Details>
      <ContactForm />
    </Details>
    <Thumbnail>
      <img src={contact} alt="I’m Kudakwashe and I’m a Backend & Devops engineer!" />
    </Thumbnail>
  </Wrapper>
);
