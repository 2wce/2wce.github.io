import dev from 'assets/illustrations/skills.svg';
import { Button, Container } from 'components/common';
import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Details, SkillsWrapper, Thumbnail, Wrapper } from './styles';

export const Skills = () => (
  <Wrapper id="about">
    <SkillsWrapper as={Container}>
      <Thumbnail>
        <LazyLoadImage
          alt="I’m Kudakwashe and I’m a Backend & Devops engineer!"
          src={dev} // use normal <img> attributes as props
        />
      </Thumbnail>
      <Details>
        <h1>Hi There!</h1>
        <p>
          I'm a Full Stack Developer with {new Date().getFullYear() - 2016} years experience working with{' '}
          <b>
            <i>JavaScript, TypeScript, ReactJS & MySQL.</i>
          </b>{' '}
          I also have experience working with{' '}
          <b>
            AWS(<i> ECS, EC2, Lambda, CodeBuild, S3 </i>)
          </b>{' '}
          and I hope to get certified soon 🤞🏽🤞🏽.
        </p>
        <Button as={AnchorLink} href="#contact">
          Hire me
        </Button>
      </Details>
    </SkillsWrapper>
  </Wrapper>
);
