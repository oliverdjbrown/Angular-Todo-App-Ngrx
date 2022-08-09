import { createAction, props } from '@ngrx/store';

type filterTypes = 'All' | 'Completed' | 'Pending';

const filterTodos = createAction(
  '[Filter], Set Filter',
  props<{ filter: filterTypes }>()
);

export { filterTypes, filterTodos };
