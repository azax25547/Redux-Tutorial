import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from '../actioncreators/actions'

const INITIAL_DATA =  [
    {
        id: 0,
        text: 'Walk the Dog',
    },
    {
        id:1,
        text: 'learn Redux',

    },
]

const todoReducer = (state = INITIAL_DATA, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id:action.id,
                    text:action.text,
                    completed:false
                }
            ]
        case REMOVE_TODO: 
            const numIndex = parseInt(action.id)
            return state.filter(todo => todo.id !== numIndex)
        case TOGGLE_TODO: 
        return state.map(todo => (todo.id === action.id) ? {...todo,completed:!todo.completed} : todo)
        default: return state;
    }
}

export default todoReducer;