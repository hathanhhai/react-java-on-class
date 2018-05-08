import * as Types from '../Constants/ActionType';
import { callApi } from '../Utils/Api';





export const addToCart = (tour,quantity) =>{
    return {
        type:Types.CART_ADD,
        tour,
        quantity
    }
}

export const saveCartRequest =(cart) =>{
    return disatch=>{
        return callApi('order','POST',cart).then(res=>{
                disatch(saveCart(res.data))
        })
    }
}

export const saveCart = (cart)=>{
    return{
        type:Types.SAVE_CART,
        cart
    }
}



//remove
export const removeItemCart = (cart)=>{
    return {
        type:Types.CART_REMOVE,
        cart
    }
}