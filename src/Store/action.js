export const updateFormData = (data) => {
    return {
        type: 'UPDATE_FORM_DATA',
        payload: data
    };
};

export const addFormData = (data) => {
    return {
        type: 'ADD_FORM_DATA',
        payload: data
    };
};