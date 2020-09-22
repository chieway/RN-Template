import {combineReducers} from 'redux';
import user from './user';

const index = combineReducers({
  user: user,
});

export default index;
