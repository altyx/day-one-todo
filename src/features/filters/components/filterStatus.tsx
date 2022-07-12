import { useContext } from 'react';
import { FiltersContext } from '../../../shared/context/filtersContext';
import { FiltersContextType } from '../../../shared/types/filters';

const FilterStatus = () => {
  const { filters, updateFilter } = useContext(FiltersContext) as FiltersContextType;

  const handleChange = (status: boolean) => {
    updateFilter({
      ...filters,
      isDone: status,
    });
  };

  return (
    <div>
      <div>Filtre sur l&apos;état</div>
      <label htmlFor="done">Done</label>
      <input
        id="done"
        type="radio"
        onChange={() => handleChange(true)}
        name="isDone"
        checked={filters.isDone === true}
      />

      <label htmlFor="not-done">Not done</label>
      <input
        id="not-done"
        type="radio"
        onChange={() => handleChange(false)}
        name="isDone"
        checked={filters.isDone === false}
      />
      <label htmlFor="both">Both</label>
      <input
        id="both"
        type="radio"
        onChange={() => handleChange(undefined)}
        name="isDone"
        checked={filters.isDone === undefined}
      />
    </div>
  );
};

export default FilterStatus;
