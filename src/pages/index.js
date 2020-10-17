import { Link } from 'gatsby';
import React, { useState } from 'react';
import styled from 'styled-components';
import TechnologyFilter from '../components/TechnologyFilter';
import PersonList from '../components/PersonList';
import SEO from '../components/SEO';

const IndexPageStyles = styled.div`
  text-align: center;
  span {
    color: var(--yellow);
  }
  h2 {
    margin-top: 40px;
  }

  footer {
    font-size: 1.6rem;
    margin-top: 40px;
  }
`;
const IndexPage = () => {
  const [currentTag, setCurrentTag] = useState('all');
  return (
    <>
      <SEO title="Devs Who Rocks" />
      <IndexPageStyles>
        <h1>
          <Link to="/">
            devswho.<span>rocks</span>
          </Link>
        </h1>
        <h2>A list of the best developers to learn programming from.</h2>
        <TechnologyFilter setCurrentTag={setCurrentTag} />
        <PersonList currentTag={currentTag} />

        <footer>
          <p>
            Built by{' '}
            <a
              href="https://cristianrita.com"
              target="blank"
              aria-label="Cristian Rita website"
            >
              Cristian Riță{'   💻'}
            </a>
          </p>
          <p>
            Inspired by{' '}
            <a
              href="https://wesbos.com"
              target="blank"
              aria-label="Wes Bos website"
            >
              Wes Bos{'   🚀'}
            </a>
          </p>
        </footer>
      </IndexPageStyles>
    </>
  );
};

export default IndexPage;
