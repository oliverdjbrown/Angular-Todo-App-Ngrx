import { createAction, props } from '@ngrx/store';

type filterTypes = 'All' | 'Completed' | 'Pending';

const setFilter = createAction(
  '[Filter], Set Filter',
  props<{ filter: filterTypes }>()
);

export { filterTypes, setFilter };
