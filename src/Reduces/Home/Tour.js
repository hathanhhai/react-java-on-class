import *  as Types from '../../Constants/ActionType';

var initialState = [];

const myReducer = (state=initialState,action) =>{
    switch(action.type){
        case Types.FETCH_TOUR:
            state = action.tour
            return state;
       case Types.DELETE_TOUR:
       var index = findTourInCart(state,action.id);
       state.splice(index,1);
       return [...state];
        default:
        return [...state];
    }
}
var findTourInCart = (state,id) =>{
    var result = -1;
        state.forEach((item,index)=>{
            if(id === item.id){
                return result = index;
            }
        });
    return result;
}

export default myReducer;