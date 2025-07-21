import { combineReducers } from 'redux';
import authReducer from './slices/authSlice';

const rootReducer = combineReducers({
  auth: authReducer, // tên này phải match với whitelist
});

export default rootReducer;
