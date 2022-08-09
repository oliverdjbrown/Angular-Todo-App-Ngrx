import { createAction, props } from '@ngrx/store';

type filterTypes = 'Todos' | 'Completados' | 'Pendientes';

const setFilter = createAction(
  '[Filter], Set Filter',
  props<{ filter: filterTypes }>()
);

export { filterTypes, setFilter };
