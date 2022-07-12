import { gql, useMutation } from '@apollo/client';

const useUpdateTodo = () => {
  const setTodo = gql`
  mutation updateTodoStatusById($id: ID!, $isDone: Boolean!) {
    updateTodoStatusById(id: $id, isDone: $isDone) {
      id
      isDone
    }
  }
`;

  return useMutation(setTodo);
};

export default useUpdateTodo;
