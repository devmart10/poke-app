import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  flex: 0 0 auto;
  text-align: center;
  padding: 1rem;
  margin: 1rem 0;
  width: 245px;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.2);
  /* box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1); */
  transition: box-shadow 0.2s ease-out;

  &:hover {
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  }
`;

const Icon = styled.img`
  background-color: rgba(0, 0, 0, 0.2);
`;

const Name = styled.h2`
  text-align: center;
  font-weight: 500;
  font-size: 2rem;
`;

const StatsTable = styled.table`
  text-align: left;
`;

const Row = stat => (
  <tr>
    <td>{stat.stat.name}</td>
    <td>{stat.base_stat}</td>
  </tr>
);

const RemoveButton = styled.button`
  background-color: hsla(0, 100%, 65%, 1);
  color: white;
  width: 100%;
  padding: 0.5rem;
`;

const Card = props => (
  <StyledCard>
    <Icon src={props.sprites && props.sprites.front_default} alt="" />
    <Name>{props.name}</Name>
    <hr />
    <StatsTable>
      <tbody>
        {props.stats &&
          props.stats.map(stat => <Row key={stat.stat.name} {...stat} />)}
      </tbody>
    </StatsTable>
    <hr />
    <RemoveButton onClick={() => props.onRemove(props.name)}>
      delete
    </RemoveButton>
  </StyledCard>
);

export default Card;
