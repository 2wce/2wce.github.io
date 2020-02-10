import { Footer } from 'components/theme';
import React from 'react';
import './fonts.css';
import { Global } from './styles';

export const Layout = ({ children }) => (
  <>
    <Global />
    {children}
    <Footer />
  </>
);
