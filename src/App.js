import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Card from "./Card";

const CardArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2rem;
`;

const Container = styled.div`
  padding: 2rem;
  margin: 0 auto;
  max-width: 30rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Input = styled.input`
  flex: auto;
`;

const AddButton = styled.button``;

const update = creatures => {
  return Promise.all(
    creatures.map(name =>
      fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then(res => res.json())
    )
  );
};

const App = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("pikachu");

  const onAdd = () => {
    const newCreatures = input.split(",").map(e => e.trim());
    update(newCreatures).then(data => {
      setData(currentData => [...currentData, ...data]);
    });
    setInput("");
  };

  const onRemove = name => {
    console.log("name", name);
    setData(currentData => currentData.filter(pokemon => pokemon.name != name));
  };

  return (
    <>
      <Container>
        <Input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onSubmit={onAdd}
        />
        <AddButton onClick={onAdd}>Add</AddButton>
      </Container>
      <hr />

      {
        <CardArea>
          {data.map(e => (
            <Card key={e.name} {...e} onRemove={onRemove} />
          ))}
        </CardArea>
      }
    </>
  );
};

export default App;
