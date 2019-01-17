import { SHOW_ALL, SET_VISIBILITY_FILTER } from '../actioncreators/actions'

const filterReducer = (state = SHOW_ALL,action) => {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return state
        default: return state;
    }
}

export default filterReducer;