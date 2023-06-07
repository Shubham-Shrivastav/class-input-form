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
    case 'CLEAR_FORM_DATA':
      return {
        name: '',
        email: '',
        gender: '',
        password: ''
      };
    default:
      return state;
  }
};

export default formReducer;