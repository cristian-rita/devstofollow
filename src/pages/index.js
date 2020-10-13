import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const IndexPageStyles = styled.div`
  text-align: center;
  span {
    color: var(--yellow);
  }
`;
const IndexPage = () => (
  <IndexPageStyles>
    <h1>
      <Link to="/">
        devswho.<span>rocks</span>
      </Link>
    </h1>
    <h2>A list of the best developers to learn programming from.</h2>
  </IndexPageStyles>
);

export default IndexPage;
