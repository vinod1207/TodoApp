import * as ActionTypes from '../ActionTypes';

export const getTodoList = () => ({
  type: ActionTypes.GET_TODO_LIST,
});

export const addTodoList = data => ({
  type: ActionTypes.GET_TODO_LIST_SUCCESS,
  data,
});

export const resetTodoList = () => ({
  type: ActionTypes.RESET_GET_TODO_LIST_LIST,
});
