const INITIAL_STATE = {
    orientation: null
};


export function orientation(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ORIENTATION_HAS_CHANGED':
            return action.orientation;

        default:
            return state;
    }
}