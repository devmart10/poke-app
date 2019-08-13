import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  border-bottom: 1px solid grey;
  justify-content: space-between;
  align-items: center;
  background-color: red;
  color: white;
`;

const Item = styled.div`
  flex: 0 0 auto;
  font-size: 3rem;
  margin: 0 1rem;
`;

const Small = styled(Item)`
  font-size: 2rem;
`;

const ItemWrapper = styled(Item)`
  display: flex;
  align-items: center;
`;

const Burger = styled.button`
  flex: 0 0 auto;
  font-size: 3rem;
  background-color: white;
  color: #333;
  width: 3rem;
  text-align: center;
`;

const Icon = styled.div`
  display: inline-block;
  background-color: red;
  border-radius: 50%;
  border: 5px solid white;
  width: 2rem;
  height: 2rem;
`;

const Navbar = () => (
  <Container>
    <Burger>=</Burger>
    <ItemWrapper>
      <Item>Poke List</Item>
      <Icon />
      <Small>Devon Martin</Small>
    </ItemWrapper>
  </Container>
);

export default Navbar;
