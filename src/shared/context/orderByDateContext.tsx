import { createContext, useState } from 'react';
import { Ordering, Orderingontext } from '../types/types';

export const OrderByDateContext = createContext<Orderingontext | null>(null);

const OrderByDateProvider = ({ children }: { children: React.ReactNode }) => {
  const [orderBy, setOrderBy] = useState<Ordering>(Ordering.ASC);

  const updateOrderBy = () => {
    if (orderBy === Ordering.ASC) setOrderBy(Ordering.DESC);
    if (orderBy === Ordering.DESC) setOrderBy(Ordering.ASC);
  };

  return (
    <OrderByDateContext.Provider value={{ orderBy, updateOrderBy }}>
      {children}
    </OrderByDateContext.Provider>
  );
};

export default OrderByDateProvider;
