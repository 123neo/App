import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import auth from './rootReducer';
// import { reducer as formReducer } from 'redux-form';
// Combines all reducers to a single reducer function
const rootReducer = combineReducers({
  //   form: formReducer,
  routing: routerReducer,
  auth,
});

export default rootReducer;
