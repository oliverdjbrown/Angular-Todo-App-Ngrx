import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { create, toggle } from './todo.actions';

export const initialState: Todo[] = [
  new Todo('Salvar el mundo'),
  new Todo('Vencer a Thanos'),
  new Todo('Comprar traje de Ironman'),
  new Todo('Robar escudo del Capitan America'),
];

export const todoReducer = createReducer(
  initialState,
  on(create, (state, { text }) => [...state, new Todo(text)]),
  on(toggle, (state, { id }) =>
    state.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  )
);
