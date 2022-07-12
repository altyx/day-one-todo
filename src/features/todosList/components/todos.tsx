import { memo } from 'react';
import styled from '@emotion/styled';
import TodoCard from './todoCard';
import { TodoList as PropsType } from '../../../shared/types/types';

interface Props {
  todos: PropsType[];
}

const TodosList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Todos = memo(({ todos }: Props) => (
  <TodosList>
    {todos?.map((todo: PropsType) => <TodoCard key={todo.id} todo={todo} />)}
  </TodosList>
));

export default Todos;
