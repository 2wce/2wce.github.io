import dev from 'assets/illustrations/dev.svg';
import { Button, Container } from 'components/common';
import { Header } from 'components/theme';
import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Details, IntroWrapper, Thumbnail, Wrapper } from './styles';

export const Intro = () => (
  <Wrapper>
    <Header />
    <IntroWrapper as={Container}>
      <Details>
        <h1>Hi There!</h1>
        <h4>I’m Kudakwashe and I’m a Backend & Devops engineer!</h4>
        <Button as={AnchorLink} href="#contact">
          Hire me
        </Button>
      </Details>
      <Thumbnail>
        <img src={dev} alt="I’m John and I’m a Backend & Devops engineer!" />
      </Thumbnail>
    </IntroWrapper>
  </Wrapper>
);
