import { combineReducers } from 'redux';
import counterReducer from '../Slice/slice';

const rootReducer = combineReducers({
  counter: counterReducer,
});

export default rootReducer;