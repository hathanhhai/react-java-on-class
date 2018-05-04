import *  as Types from '../../Constants/ActionType';

var data = JSON.parse(localStorage.getItem("Cart"));

var initialState = data ? data : [];

const myReducer = (state=initialState,action) =>{
    switch(action.type){
        case Types.CART_ADD:
            var index = findTourInCart(state,action.tour);
            if(index === -1){
                state.push({
                    tour:action.tour,
                    quantity:action.quantity
                })
            }else{
                state[index].quantity++;
            }
            localStorage.setItem("Cart",JSON.stringify(state));
            return [...state];
        default:
        return [...state];
    }
}

var findTourInCart = (state,tour) =>{
    var result = -1;
        state.forEach((item,index)=>{
            if(tour.id === item.tour.id){
                return result = index;
            }
        });
    return result;
}

export default myReducer;