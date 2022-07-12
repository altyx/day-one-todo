import { ApolloError, gql, useQuery } from '@apollo/client';
import { useContext } from 'react';
import type { Orderingontext, TodoList as PropsType } from '../../../shared/types/types';
import { TodoTypes } from '../../../shared/types/types';
import { FiltersContext } from '../../../shared/context/filtersContext';
import { FiltersContextType } from '../../../shared/types/filters';
import { OrderByDateContext } from '../../../shared/context/orderByDateContext';

type ReturnType = {
  loading: boolean;
  error?: ApolloError;
  data: PropsType[];
}

const useListTodos = (): ReturnType => {
  const { filters } = useContext(FiltersContext) as FiltersContextType;
  const { orderBy } = useContext(OrderByDateContext) as Orderingontext;
  const getTodoList = gql`
  query getTodoList($filters: TodoFiltersInput, $orderBy: Ordering) {
    getTodoList(filters: $filters, orderBy: $orderBy) {
      id
      type
      title
      isDone
      createdAt
    }
  }
`;

  // TODO: fix the trick
  const filter = [TodoTypes.TECH, TodoTypes.RH, TodoTypes.MARKETING, TodoTypes.COMMUNICATION];
  const { loading, error, data } = useQuery(getTodoList, {
    variables: {
      filters: {
        ...filters,
        types: filters.types.length ? filters.types : filter,
      },
      orderBy,
    },
  });
  return { data: data?.getTodoList, error, loading };
};

export default useListTodos;
