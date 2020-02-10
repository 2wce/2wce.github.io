import { Container } from 'components/common';
import { Link } from 'gatsby';
import React from 'react';
import NavbarLinks from '../NavbarLinks';
import { Wrapper } from './styles';

const Navbar = () => (
  <Wrapper as={Container}>
    <Link to="/">Kudakwashe Mupeni</Link>
    <NavbarLinks desktop />
  </Wrapper>
);

export default Navbar;
