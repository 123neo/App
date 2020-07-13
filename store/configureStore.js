import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers/index';
import rootSaga from '../sagas/index'; // TODO: Next step

const sagaMiddleware = createSagaMiddleware();
const configureStore = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
console.log('in the sagaaaaaaaaaaaaaaaaaa');
export default configureStore;
