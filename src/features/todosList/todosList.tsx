import useListTodos from './hooks/useListTodos';
import Todos from './components/todos';
import ErrorPage from '../../shared/components/error';
import Loading from '../../shared/components/loading';

function TodosList() {
  const { loading, error, data } = useListTodos();
  if (error) return <ErrorPage />;

  if (loading) return <Loading />;

  return (
    <div>
      <h1>Todos</h1>
      <Todos todos={data} />
    </div>
  );
}

export default TodosList;
