import * as ActionTypes from '../ActionTypes';

export const loginAccount = (payloadData, header) => ({
  type: ActionTypes.LOGIN_ACCOUNT,
  payload: payloadData,
  header: header,
});

export const resetLoginAccount = () => ({
  type: ActionTypes.RESET_LOGIN_ACCOUNT,
});

export const loginSocialAccount = payloadData => ({
  type: ActionTypes.LOGIN_SOCIAL_ACCOUNT,
  payload: payloadData,
});

export const loginAccountSuccess = data => ({
  type: ActionTypes.LOGIN_ACCOUNT_SUCCESS,
  data,
});

export const loginAccountError = (error, id) => ({
  type: ActionTypes.LOGIN_ACCOUNT_ERROR,
  error,
  id,
});

export const getTodoList = () => ({
  type: ActionTypes.GET_TODO_LIST,
});

export const TodoListSuccess = data => ({
  type: ActionTypes.GET_TODO_LIST_SUCCESS,
  data,
});

export const resetTodoList = () => ({
  type: ActionTypes.RESET_GET_TODO_LIST_LIST,
});
