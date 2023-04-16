import { IS_CLICKED_ON, IS_CLICKED_OFF } from '../actions'

const initialState = false

const userActionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_CLICKED_ON:
            return state = true
        case IS_CLICKED_OFF:
            return state = false
        default: return state
    }
}

export default userActionsReducer