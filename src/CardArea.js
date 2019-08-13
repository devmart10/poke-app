import React from "react";
import styled from "styled-components";

const Container = styled.div``;
const Area = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 1rem auto;
  /* grid-gap: 1rem; */
  max-width: 55%;
`;

const StyledCard = styled.div`
  text-align: center;
  padding: 1rem;
  /* margin: 1rem; */
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.2s ease-out;

  &:hover {
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  }
`;

const Icon = styled.img`
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 50%;
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

const CardArea = props => (
  <Area>
    {props.data &&
      props.data.map(e => (
        <Card key={e.name} {...e} onRemove={props.onRemove} />
      ))}
  </Area>
);

export default CardArea;
