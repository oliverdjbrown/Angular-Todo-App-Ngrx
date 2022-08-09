import { ActionReducerMap } from "@ngrx/store";
import { filterReducer } from "../filter/filter.reducer";
import { todoReducer } from "../todos/todo.reducer";
import { Todo } from "../../todos/models/todo.model";


interface AppState {
    todos: Todo[]
    filter: string
}

const appReducers: ActionReducerMap<AppState> = {
    todos: todoReducer,
    filter: filterReducer
};

export {AppState, appReducers};