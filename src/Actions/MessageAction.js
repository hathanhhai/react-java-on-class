import * as Actions from '../Constants/ActionType';


//--------- Create --------


export const chaneMessage = (message) =>{
    return {
        type:Actions.MESSAGE_CHANGE,
        message
    }
}



