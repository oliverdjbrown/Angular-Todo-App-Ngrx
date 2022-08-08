import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import * as actions from './todo.actions';

export const initialState: Todo[] = [
  new Todo('Salvar el mundo'),
  new Todo('Vencer a Thanos'),
  new Todo('Comprar traje de Ironman'),
  new Todo('Robar escudo del Capitan America'),
];

export const todoReducer = createReducer(
  initialState,
  on(actions.createTodo, (state, { text }) => [...state, new Todo(text)]),
  on(actions.deleteTodo, (state, { id }) => state.filter(todo => todo.id !== id)),
  on(actions.editTodo, (state, { id, text }) =>
    state.map((todo) =>
      todo.id === id ? { ...todo, text } : todo
    )
  ),
  on(actions.toggleTodo, (state, { id }) =>
    state.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  )
);
