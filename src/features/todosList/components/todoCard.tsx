import { memo } from 'react';
import styled from '@emotion/styled';
import { TodoList as PropsType } from '../../../shared/types/types';
import ChangeStatus from './changeStatus';
import LinkPath from '../../../shared/components/link';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  width: 340px;
  transition: .3s;
  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  }
`;

const TodoCard = memo(({ todo }: { todo: PropsType }) => (
  <Container>
    <LinkPath path={`/todo/${todo.id}`}>
      <div>{todo.title}</div>
      <div>{todo.createdAt}</div>
      <div>{todo.type}</div>
      <div>{todo.isDone.toString()}</div>
    </LinkPath>
    <ChangeStatus todo={todo} />
  </Container>
));

export default TodoCard;
