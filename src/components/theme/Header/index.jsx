import React, { useState } from 'react';
import Hamburger from './Hamburger';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { Overlay, Wrapper } from './styles';

export const Header = () => {
  const [sidebar, toggle] = useState(false);
  return (
    <Wrapper>
      <Overlay sidebar={sidebar} onClick={() => toggle(!sidebar)} />
      <Navbar />
      <Hamburger sidebar={sidebar} toggle={toggle} />
      <Sidebar sidebar={sidebar} toggle={toggle} />
    </Wrapper>
  );
};
