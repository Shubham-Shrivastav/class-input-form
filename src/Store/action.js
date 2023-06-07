export const updateFormData = (data) => ({
    type: 'UPDATE_FORM_DATA',
    payload: data
});

export const addFormData = (data) => ({
    type: 'ADD_FORM_DATA',
    payload: data
});

export const clearFormData = () => {
    return { type: 'CLEAR_FORM_DATA' }
};  