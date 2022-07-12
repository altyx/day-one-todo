import { Route, Routes as Router } from 'react-router-dom';
import React from 'react';
import Todos from '../views/todos';
import NotFound from '../views/404';
import Todo from '../views/todo';

function Routes() {
  return (
    <Router>
      <Route path="/" element={<Todos />} />
      <Route path="todo/:todoId" element={<Todo />} />
      <Route path="*" element={<NotFound />} />
    </Router>
  );
}

export default Routes;
