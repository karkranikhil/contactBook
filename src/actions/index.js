
export const selectContact = (contactId) => {
    return {
        type: 'SELECTED_CONTACT',
        selectId: contactId,
    };
};

export const noneSelected = () => {
    return {
        type: 'NONE_SELECTED',
    };
};
