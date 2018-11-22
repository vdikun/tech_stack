export default (state = [], action) => {
    switch (action.type) {
        case 'SELECT_LIBRARY':
            const libraryId = action.payload;
            var index = state.indexOf(libraryId);
            var newState;
            if (index == -1) {
                // add libraryId to array
                newState = [ ...state, libraryId ];
            }
            else {
                // remove libraryId from array
                newState = state;
                newState.splice(index, 1);
            }
            console.log(newState);
            return newState;
        default:
            return state;
    }
};