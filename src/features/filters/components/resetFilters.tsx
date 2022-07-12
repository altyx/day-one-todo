import { useContext } from 'react';
import { FiltersContext } from '../../../shared/context/filtersContext';
import { FiltersContextType } from '../../../shared/types/filters';
import Button from '../../../shared/components/button';

const ResetFilters = () => {
  const { resetFilter } = useContext(FiltersContext) as FiltersContextType;

  const resetFilters = () => {
    resetFilter();
  };

  return <Button type="button" onClick={resetFilters}>Reset filters</Button>;
};

export default ResetFilters;
