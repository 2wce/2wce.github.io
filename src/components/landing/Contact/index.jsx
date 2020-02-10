import contact from 'assets/illustrations/contact.svg';
import { Container } from 'components/common';
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ContactForm from './ContactForm';
import { Details, Thumbnail, Wrapper } from './styles';

export const Contact = () => (
  <Wrapper as={Container} id="contact">
    <Details>
      <ContactForm />
    </Details>
    <Thumbnail>
      <LazyLoadImage
        alt="I’m Kudakwashe and I’m a Backend & Devops engineer!"
        src={contact} // use normal <img> attributes as props
      />
    </Thumbnail>
  </Wrapper>
);
