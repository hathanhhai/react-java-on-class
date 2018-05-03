import *  as Types from '../../Constants/ActionType';

var initialState = [];

const myReducer = (state=initialState,action) =>{
    switch(action.type){
         case Types.FETCH_TOUR_ONE:
              state = action.tour
              
         return action.tour;
        default:
        return [...state];
    }
}

export default myReducer;