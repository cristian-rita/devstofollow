import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Person from './Person';

const PersonListStyles = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 50px;
`;
const PersonList = ({ currentTag }) => {
  const { devs } = useStaticQuery(graphql`
    query {
      devs: allDevsJson {
        nodes {
          id
          name
          country
          twitter
          website
          github
          description
          technologies
        }
      }
    }
  `);

  const devsWithTags =
    currentTag === 'all'
      ? devs.nodes
      : devs.nodes.filter((dev) => dev.technologies.includes(currentTag));

  return (
    <PersonListStyles>
      {devsWithTags.map((dev) => (
        <Person person={dev} key={dev.name} />
      ))}
    </PersonListStyles>
  );
};
export default PersonList;
