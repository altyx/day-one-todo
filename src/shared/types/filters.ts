import { TodoFiltersInput } from './types';

export type FiltersContextType = {
  filters: TodoFiltersInput;
  updateFilter: (filter: TodoFiltersInput) => void;
  resetFilter: () => void;
}
