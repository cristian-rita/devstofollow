import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

const getTechnologies = (devs) =>
  devs
    .map((dev) => dev.technologies)
    .flat()
    .reduce((accumulator, technology) => {
      const existingTechnology = accumulator[technology];
      if (existingTechnology) accumulator[technology].count += 1;
      else {
        accumulator[technology] = {
          count: 1,
          name: technology,
        };
      }
      return accumulator;
    }, {});

const TagsStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  margin: 50px 30px;
  gap: 5px;

  label {
    background-color: var(--pink);
    padding: 5px;
    border-radius: 2px;
    cursor: pointer;
    display: flex;
    align-items: center;

    & span {
      margin-left: 5px;
      color: var(--grey);
      font-size: 1.3rem;
      padding: 3px;
      border-radius: 2px;
      background-color: var(--blue);
      font-weight: 500;
    }
  }
  label:hover {
    transform: scale(1.02);
  }
  input {
    display: none;
  }

  .active-tag {
    background-color: var(--yellow);
  }
`;

const PeopleFilter = () => {
  const [tag, setTag] = useState('');

  const { devs } = useStaticQuery(graphql`
    query {
      devs: allPeopleJson {
        nodes {
          id
          name
          country
          description
          twitter
          website
          github
          technologies
        }
      }
    }
  `);

  const technologiesWithCount = Object.values(getTechnologies(devs.nodes)).sort(
    (a, b) => b.count - a.count
  );

  return (
    <div>
      <TagsStyles>
        {technologiesWithCount.map((technology) => (
          <label
            key={technology.name}
            htmlFor={`${technology.name}`}
            className={tag === technology.name ? 'active-tag' : ''}
          >
            <input
              id={`${technology.name}`}
              name="tag"
              type="radio"
              onClick={(e) => setTag(e.target.id)}
            />
            {technology.name}
            <span>{technology.count}</span>
          </label>
        ))}
      </TagsStyles>
    </div>
  );
};

export default PeopleFilter;
