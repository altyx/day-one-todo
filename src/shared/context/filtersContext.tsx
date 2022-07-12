import React, { createContext, useState } from 'react';
import { TodoFiltersInput } from '../types/types';
import { FiltersContextType } from '../types/filters';

export const FiltersContext = createContext<FiltersContextType | null>(null);

const FiltersProvider = ({ children }: { children: React.ReactNode}) => {
  const [filters, setFilters] = useState<TodoFiltersInput>({
    types: [],
    isDone: undefined,
  });

  const updateFilter = (filter: TodoFiltersInput) => {
    setFilters(filter);
  };

  const resetFilter = () => {
    setFilters({
      types: [],
      isDone: undefined,
    });
  };

  return (
    <FiltersContext.Provider value={{ filters, updateFilter, resetFilter }}>
      {children}
    </FiltersContext.Provider>
  );
};

export default FiltersProvider;
