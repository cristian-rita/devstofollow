import { Link } from 'gatsby';
import React, { useState } from 'react';
import styled from 'styled-components';
import TechnologyFilter from '../components/TechnologyFilter';
import PersonList from '../components/PersonList';

const IndexPageStyles = styled.div`
  text-align: center;
  span {
    color: var(--yellow);
  }
  h2 {
    margin-top: 40px;
  }
`;
const IndexPage = () => {
  const [currentTag, setCurrentTag] = useState('all');
  return (
    <IndexPageStyles>
      <h1>
        <Link to="/">
          devswho.<span>rocks</span>
        </Link>
      </h1>
      <h2>A list of the best developers to learn programming from.</h2>
      <TechnologyFilter setCurrentTag={setCurrentTag} />
      <PersonList currentTag={currentTag} />
    </IndexPageStyles>
  );
};

export default IndexPage;
