import {
  memo, useContext,
} from 'react';
import { FiltersContext } from '../../../shared/context/filtersContext';
import { FiltersContextType } from '../../../shared/types/filters';
import { TodoTypes } from '../../../shared/types/types';
import Button from '../../../shared/components/button';

const BusinessFilter = memo(() => {
  const { updateFilter, filters } = useContext(FiltersContext) as FiltersContextType;

  // TODO: to complex, could be simplified, missing time
  const handleFilter = () => {
    const oldTypes = Array.from(filters.types);
    if (oldTypes.includes(TodoTypes.COMMUNICATION) && oldTypes.includes(TodoTypes.MARKETING)) {
      const types = Array.from(filters.types);
      const newTypes = types.filter((type) => (
        type !== TodoTypes.COMMUNICATION && type !== TodoTypes.MARKETING
      ));
      updateFilter({
        ...filters,
        types: newTypes,
      });
    } else if (
      oldTypes.includes(TodoTypes.COMMUNICATION)
      || oldTypes.includes(TodoTypes.MARKETING)) {
      oldTypes.push(
        oldTypes.includes(TodoTypes.COMMUNICATION) ? TodoTypes.MARKETING : TodoTypes.COMMUNICATION,
      );
      updateFilter({ ...filters, types: oldTypes });
    } else {
      oldTypes.push(TodoTypes.MARKETING, TodoTypes.COMMUNICATION);
      updateFilter({ ...filters, types: oldTypes });
    }
  };

  return <Button type="button" onClick={() => handleFilter()}>Business Filter</Button>;
});

export default BusinessFilter;
