import styled from '@emotion/styled';
import ResetFilters from './components/resetFilters';
import BusinessFilter from './components/businessFilter';
import MainFilter from './components/mainFilter';
import OrderByDate from './components/orderByDate';
import FilterStatus from './components/filterStatus';

const FiltersView = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  flex-direction: column;
`;

const ButtonFilters = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

const Filtre = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Filters = () => (
  <FiltersView>
    <Filtre>
      <MainFilter />
      <FilterStatus />
    </Filtre>
    <ButtonFilters>
      <ResetFilters />
      <BusinessFilter />
      <OrderByDate />
    </ButtonFilters>
  </FiltersView>
);

export default Filters;
