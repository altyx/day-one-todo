import { useContext } from 'react';
import { TodoTypes } from '../../../shared/types/types';
import { FiltersContext } from '../../../shared/context/filtersContext';
import { FiltersContextType } from '../../../shared/types/filters';

const MainFilter = () => {
  const { updateFilter, filters } = useContext(FiltersContext) as FiltersContextType;

  const handleChange = (value: TodoTypes) => {
    if (filters.types.includes(value)) {
      const types = Array.from(filters.types);
      const newTypes = types.filter((type) => type !== value);
      updateFilter({
        ...filters,
        types: newTypes,
      });
    } else {
      const types = Array.from(filters.types);
      types.push(value);
      updateFilter({ ...filters, types });
    }
  };

  const isChecked = (type: TodoTypes) => filters.types.includes(type);
  return (
    <div>
      <div>Filtre sur le type</div>
      <label htmlFor="rh">{TodoTypes.RH}</label>
      <input
        name={TodoTypes.RH}
        onChange={() => handleChange(TodoTypes.RH)}
        id="rh"
        type="checkbox"
        checked={isChecked(TodoTypes.RH)}
      />

      <label htmlFor="tech">{TodoTypes.TECH}</label>
      <input
        name={TodoTypes.TECH}
        checked={isChecked(TodoTypes.TECH)}
        onChange={() => handleChange(TodoTypes.TECH)}
        id="tech"
        type="checkbox"
      />

      <label htmlFor="marketing">{TodoTypes.MARKETING}</label>
      <input
        name={TodoTypes.MARKETING}
        checked={isChecked(TodoTypes.MARKETING)}
        onChange={() => handleChange(TodoTypes.MARKETING)}
        id="marketing"
        type="checkbox"
      />

      <label htmlFor="com">{TodoTypes.COMMUNICATION}</label>
      <input
        name={TodoTypes.COMMUNICATION}
        onChange={() => handleChange(TodoTypes.COMMUNICATION)}
        id="com"
        type="checkbox"
        checked={isChecked(TodoTypes.COMMUNICATION)}
      />
    </div>
  );
};

export default MainFilter;
