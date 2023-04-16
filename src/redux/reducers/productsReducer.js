import { products } from '../../mockDB/products';
import { ADD_PRODUCT } from '../actions/index';

const initialState = [...products]

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return [action.payload, ...state]
        default: return state
    }
}

export default productReducer