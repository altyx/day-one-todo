import React from 'react';
import styled from '@emotion/styled';
import TodosList from '../features/todosList/todosList';
import Filters from '../features/filters/filters';

const View = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 700px;
  margin: auto;
  padding; 10px;
`;

function TodosView() {
  return (
    <View>
      <Filters />
      <TodosList />
    </View>
  );
}

export default TodosView;
