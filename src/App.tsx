import React from 'react';
import './App.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/routes';
import config from './config/config';
import FiltersProvider from './shared/context/filtersContext';
import OrderByDateProvider from './shared/context/orderByDateContext';

const client = new ApolloClient({
  uri: config.api,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <FiltersProvider>
      <OrderByDateProvider>
        <ApolloProvider client={client}>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </ApolloProvider>
      </OrderByDateProvider>
    </FiltersProvider>
  );
}

export default App;
