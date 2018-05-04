import * as Types from '../Constants/ActionType';


export const addToCart = (tour,quantity) =>{
    return {
        type:Types.CART_ADD,
        tour,
        quantity
    }
}