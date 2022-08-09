import { createReducer, on } from '@ngrx/store';
import { setFilter } from './filter.actions';

export const initialState = 'All';

export const filterReducer = createReducer(
  initialState,
  on(setFilter, (state, { filter }) => filter)
);
