import { combineReducers } from 'redux';

const formReducer = (state = {
  name: '',
  email: '',
  gender: '',
  password: ''
}, action) => {
  switch (action.type) {
    case 'UPDATE_FORM_DATA':
      return {
        ...state,
        [action.payload.name]: action.payload.value
      };
    default:
      return state;
  }
};

const tableDataReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_FORM_DATA':
      return [...state, action.payload];
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  form: formReducer,
  tableData: tableDataReducer
});

export default rootReducer;