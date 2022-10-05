import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from 'redux';
import {createLogicMiddleware} from 'redux-logic';
import {logics} from './logic';

import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import tasks from './reducers/TasksReducer';
import user from './reducers/userReducer';
import events from './reducers/EventsReducer';

export const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const logicMiddleware = createLogicMiddleware(logics);
const middleware = applyMiddleware(logicMiddleware);
let reducers = combineReducers({
  user: persistReducer(persistConfig, user),
  tasks,
  events,
});

const store = createStore(reducers, middleware);
let persistor = persistStore(store);
export {store, persistor};
