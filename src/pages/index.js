import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import PeopleFilter from '../components/PeopleFilter';

const IndexPageStyles = styled.div`
  text-align: center;
  span {
    color: var(--yellow);
  }
  h2 {
    margin-top: 40px;
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
    <PeopleFilter />
  </IndexPageStyles>
);

export default IndexPage;
