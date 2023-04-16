export const ADD_PRODUCT = 'ADD_PRODUCT'
export const IS_CLICKED_ON = 'IS_CLICKED_ON'
export const IS_CLICKED_OFF = 'IS_CLICKED_OFF'

export const addProduct = (newProduct) => {
    return {
        type: ADD_PRODUCT,
        payload: newProduct
    }
}

export const clickedOn = () => {
    return {
        type: IS_CLICKED_ON,
    }
}

export const clickedOff = () => {
    return {
        type: IS_CLICKED_OFF,
    }
}