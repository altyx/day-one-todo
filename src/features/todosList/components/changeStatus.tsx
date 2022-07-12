import { TodoList } from '../../../shared/types/types';
import useUpdateTodo from '../hooks/useUpdateTodo';
import Button from '../../../shared/components/button';

const ChangeStatus = ({ todo }: { todo: TodoList }) => {
  const [updateTodo] = useUpdateTodo();

  const handleClick = (event: React.SyntheticEvent) => {
    event.stopPropagation();
    updateTodo({ variables: { id: todo.id, isDone: !todo.isDone } });
  };
  return <Button onClick={(event) => handleClick(event)} type="button">Change status</Button>;
};

export default ChangeStatus;
