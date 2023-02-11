import { SET_USER_STATUS } from '../redux/actions';

const initialState = {
    status: 'online'
};

export default function(state = initialState, action) {
    switch (action.type) {
        case SET_USER_STATUS:
            return {
                ...state,
                status: action.payload
            };
        default:
            return state;
    }
}