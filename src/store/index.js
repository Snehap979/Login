import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import EmployeeReducer from './employee/EmployeeReducer';
import LoginReducer from './login/LoginReducer';


const reducers = combineReducers({
  login:LoginReducer,
  employee:EmployeeReducer
})

const store = createStore(reducers, {}, applyMiddleware(thunk));
export default store;
