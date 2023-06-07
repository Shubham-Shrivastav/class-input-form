import { combineReducers } from 'redux';
import formReducer from './formReducer';

const tableDataReducer = (state = [], action) => {

  switch (action.type) {
    case 'ADD_FORM_DATA':
      const newState = [...state, action.payload];
      if (action.callback) {
        action.callback();
      }
      return newState;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  form: formReducer,
  tableData: tableDataReducer
});

export default rootReducer