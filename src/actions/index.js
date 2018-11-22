// note: no 'default' because we may export multiple items
// use export default when exporting just 1 item
export const selectLibrary = (libraryId) => {
    return {
        type: 'SELECT_LIBRARY',
        payload: libraryId
    }
};