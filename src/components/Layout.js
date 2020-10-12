import React from 'react';
import GlobalStyles from '../styles/GlobalStyles';
import 'normalize.css';
import Typography from '../styles/Typography';

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <Typography />
    {children}
  </>
);

export default Layout;
