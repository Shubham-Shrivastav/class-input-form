const tableDataReducer = (state = [], action) => {
    switch (action.type) {
      case 'ADD_FORM_DATA':
        return [...state, action.payload];
      default:
        return state;
    }
  };
  
  export default tableDataReducer;
  