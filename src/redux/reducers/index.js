import { combineReducers } from 'redux'
import productReducer from './productsReducer'
import userActionsReducer from './userActionsReducer'

const rootReducer = combineReducers({
    products: productReducer,
    isClicked: userActionsReducer
})

export default rootReducer