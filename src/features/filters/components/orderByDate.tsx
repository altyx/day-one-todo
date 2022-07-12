import { useContext } from 'react';
import { OrderByDateContext } from '../../../shared/context/orderByDateContext';
import Button from '../../../shared/components/button';

const OrderByDate = () => {
  const { updateOrderBy } = useContext(OrderByDateContext);
  const handleOrderBy = () => {
    updateOrderBy();
  };

  return (
    <Button type="button" onClick={handleOrderBy}>Trier par date</Button>
  );
};

export default OrderByDate;
