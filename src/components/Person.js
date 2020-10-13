import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const PersonStyles = styled.div`
  border: 1px solid var(--grey);
  border-radius: 3px;
  display: grid;
  margin: 10px;
  grid-template-rows: 1fr auto auto;

  ul {
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    margin: 50px 0;
    padding: 0;
  }
  li {
    background: var(--pink);
    margin-top: 5px;
    margin-right: 5px;
    padding: 3px;
    border-radius: 2px;
  }
`;

const SocialStyles = styled.div`
  display: flex;

  span {
    border: 1px solid var(--grey);
    border-bottom: none;
    border-left: none;
    flex: 1;
    padding: 15px;
  }

  span:last-child {
    border-right: none;
  }
  span:first-child {
    border-left: none;
  }
`;

const BioStyles = styled.div`
  display: block;
  padding: 20px;
`;
const Person = ({ person }) => (
  <PersonStyles>
    <BioStyles>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: '30px',
        }}
      >
        <img
          width="50"
          height="50"
          src={`https://unavatar.now.sh/twitter/${person.twitter}`}
          style={{ borderRadius: '3px' }}
          alt={person.name}
          loading="lazy"
        />
        <p
          style={{
            margin: 0,
            marginLeft: '10px',
            fontSize: '2.5rem',
            color: 'var(--yellow)',
            fontWeight: '500',
            textAlign: 'left',
          }}
        >
          {`${person.name} ${person.country}`}
        </p>
      </div>
      <p>{person.description}</p>
      <ul>
        {person.technologies.map((technology) => (
          <li>{technology}</li>
        ))}
      </ul>
    </BioStyles>
    <SocialStyles>
      <span>
        <a
          href={`https://twitter.com/${person.twitter}`}
          aria-label="Twitter account"
        >
          <FontAwesomeIcon className="socialIcon" icon={faTwitter} />
        </a>
      </span>
      <span>
        <a
          href={`https://github.com/${person.github}`}
          aria-label="Github account"
        >
          <FontAwesomeIcon className="socialIcon" icon={faGithub} />
        </a>
      </span>
      <span>
        <a href={person.website} aria-label="Personal website">
          <FontAwesomeIcon className="socialIcon" icon={faGlobe} />
        </a>
      </span>
    </SocialStyles>
  </PersonStyles>
);

export default Person;
