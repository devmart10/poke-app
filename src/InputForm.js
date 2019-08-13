import React from "react";
import styled from "styled-components";

const Container = styled.form`
  margin: 2rem auto;
  padding: 2rem;
  max-width: 50%;
  border: 1px solid grey;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 960px) {
    width: 100% !important;
    max-width: 100% !important;
  }
`;

const Input = styled.input`
  flex: auto;
`;

const AddButton = styled.button``;

const Label = styled.h1`
  margin: 1rem 0;
  flex: 0 0 100%;
`;

const InputForm = props => {
  const onSubmit = e => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <Container onSubmit={onSubmit}>
      <Label>Enter pokemon:</Label>
      <Input
        type="text"
        value={props.input}
        onChange={e => props.setInput(e.target.value)}
        onSubmit={props.onAdd}
        autoFocus
      />
      <AddButton onClick={props.onAdd}>Add</AddButton>
    </Container>
  );
};
export default InputForm;
