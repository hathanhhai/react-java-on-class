import *  as Types from '../Constants/ActionType';
import * as Messages from '../Constants/Messages';
var initialState = '';

const myReducer = (state=initialState,action) =>{
    switch(action.type){
        case Types.MESSAGE_CHANGE:
        if(action.message === Messages.MESSAGE_REGISTER_FAIL){
            state = Messages.MESSAGE_REGISTER_FAIL;
        }
        if(action.message === Messages.MESSAGE_REGISTER_SUCCESSFULLY){
            state = Messages.MESSAGE_REGISTER_SUCCESSFULLY;
        }
        if(action.message === Messages.MESSAGE_LOGIN_FAIL){
            state = Messages.MESSAGE_LOGIN_FAIL;
        }
      

        return [...state];
        default:
        return [...state];
    }
}

export default myReducer;