import *  as Types from '../../Constants/ActionType';

var initialState = [];

const myReducer = (state=initialState,action) =>{
    switch(action.type){
        case Types.FETCH_TOUR:
            state = action.tour
            return state;
       
        default:
        return [...state];
    }
}

export default myReducer;