import Immutable from 'seamless-immutable';
import {
  GET_TODO_LIST,
  GET_TODO_LIST_SUCCESS,
  RESET_GET_TODO_LIST_LIST,
} from '../ActionTypes';
import {createReducer} from '../CreateReducer';

const INITIAL_STATE = Immutable({
  todoListData: null,
  isFetching: false,
  error: null,
});

const reducers = {
  //Login account data
  [GET_TODO_LIST]: (state, action) => {
    return Immutable.merge(state, {todoListData: null, isFetching: true});
  },

  [RESET_GET_TODO_LIST_LIST]: (state, action) => {
    return Immutable.merge(state, {todoListData: null});
  },

  [GET_TODO_LIST_SUCCESS]: (state, {data}) => {
    return Immutable.merge(state, {
      todoListData: data,
      isFetching: false,
      error: null,
    });
  },
};

export const reducer = createReducer(INITIAL_STATE, reducers);
