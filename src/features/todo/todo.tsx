import { useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import useTodo from './hooks/useTodo';
import ErrorPage from '../../shared/components/error';
import Loading from '../../shared/components/loading';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  transition: .3s;
  padding: 20px;
`;

function Todo() {
  const params = useParams();
  const { todo, loading, error } = useTodo(params.todoId);
  if (error) return <ErrorPage />;

  if (loading) return <Loading />;

  return (
    <Container>
      <h2>{todo.title}</h2>
      <div>isDone : {todo.isDone.toString()}</div>
      <div>{todo.createdAt}</div>
      <div>type: {todo.type}</div>
      <p>{todo.text}</p>
    </Container>
  );
}

export default Todo;
