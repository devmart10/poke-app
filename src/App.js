import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Navbar from "./Navbar";
import CardArea from "./CardArea";
import InputForm from "./InputForm";

const getData = async creatures => {
  return await Promise.all(
    creatures.map(name =>
      fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then(res => res.json())
    )
  );
};

const App = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");

  const onAdd = () => {
    const newCreatures = input.split(",").map(e => e.trim());
    getData(newCreatures).then(data => {
      setData(currentData => [...currentData, ...data]);
    });
    setInput("");
  };

  const onRemove = name => {
    setData(currentData => currentData.filter(pokemon => pokemon.name != name));
  };

  return (
    <>
      <Navbar />
      <InputForm input={input} setInput={setInput} onAdd={onAdd} />
      <CardArea onRemove={onRemove} data={data} />
    </>
  );
};

export default App;
