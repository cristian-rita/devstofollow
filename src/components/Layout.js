import React from 'react';
import styled from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import 'normalize.css';
import Typography from '../styles/Typography';

const PageStyles = styled.main`
  display: flex;
  flex-wrap: wrap;
  width: 96%;
  justify-content: center;
  margin: 0 auto;
  margin-top: 4rem;
`;
const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <Typography />
    <PageStyles>{children}</PageStyles>
  </>
);

export default Layout;
