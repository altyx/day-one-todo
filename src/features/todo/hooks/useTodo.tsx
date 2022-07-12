import { ApolloError, gql, useQuery } from '@apollo/client';
import { Todo } from '../../../shared/types/types';

type ReturnType = {
  loading: boolean;
  error?: ApolloError;
  todo: Todo;
}

const useTodo = (id: string): ReturnType => {
  const getTodo = gql`
  query getTodo($id: ID!) {
    getTodoById(id: $id) {
      id
      type
      title
      isDone
      createdAt
      text
    }
  }
`;
  const { loading, error, data } = useQuery(getTodo, {
    variables: {
      id,
    },
  });
  return { todo: data?.getTodoById, error, loading };
};

export default useTodo;
