import { combineReducers } from 'redux';
import formReducer from './formReducer';
import tableDataReducer from './tableDataReducer';

const rootReducer = combineReducers({
  form: formReducer,
  tableData: tableDataReducer
});

export default rootReducer;
