import React from 'react';
import styled from '@emotion/styled';
import Todo from '../features/todo/todo';
import LinkPath from '../shared/components/link';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 700px;
  margin: auto;
  padding: 10px;
`;

function TodoView() {
  return (
    <Container>
      <LinkPath path="/">Retour à la liste des todos</LinkPath>
      <h1>Todo</h1>
      <Todo />
    </Container>
  );
}

export default TodoView;
