import auth from './authReducer';
import products from './productReducer'
import {combineReducers} from 'redux';

//using predefined redux combined reducers,All another reducer will be combined here
export default combineReducers({
  auth,
  products
});
  


