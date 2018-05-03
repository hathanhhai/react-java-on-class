import *  as Types from '../../Constants/ActionType';

var initialState = [2,3];

const myReducer = (state=initialState,action) =>{
    switch(action.type){
        case Types.FETCH_TOUR:
            
            console.log(action);
            state = action.tour
            return [...state];
        default:
        return [...state];
    }
}

export default myReducer;