import {ADD, INIT} from '../actions/person'

const initialState = [{
    id: 1,
    name: 'Ryan Ghost',
    address: 'Las Nevadas',
    phoneNumber: '+62-6666-666'
}]

export default function(state = initialState, action) {
    switch(action.type) {
        case ADD: 
            return [
                ...state, 
                action.payload
            ]
        case INIT:
            return action.payload
        default: 
            return state
    }
}