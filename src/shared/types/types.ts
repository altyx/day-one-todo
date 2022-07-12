export enum TodoTypes {
  RH = 'RH',
  TECH = 'Tech',
  MARKETING = 'Marketing',
  COMMUNICATION = 'Communication',
}

export interface Todo {
  id: string;
  createdAt: string;
  type: TodoTypes;
  isDone: boolean;
  text: string;
  title: string;
}

export type TodoList = {
  id: string;
  createdAt: string;
  type: TodoTypes;
  isDone: boolean;
  title: string;
}

export type TodoFiltersInput = {
  types?: TodoTypes[];
  isDone?: boolean;
}

export enum Ordering {
  ASC = 'DATE_ASC',
  DESC = 'DATE_DESC',
}

export type Orderingontext = {
  orderBy: Ordering;
  updateOrderBy: () => void;
}
