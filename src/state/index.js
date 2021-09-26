import {combineReducers} from 'redux';
import configureStore from './CreateStore';
import rootSaga from './Sagas';

export default () => {
  const rootReducer = combineReducers({
    auth: require('./auth/Reducer').reducer,
    todo: require('./todo/Reducer').reducer,
  });

  return configureStore(rootReducer, rootSaga);
};
