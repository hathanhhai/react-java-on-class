import *  as Types from '../../Constants/ActionType';
import * as Messages from '../../Constants/Messages';
var initialState = [];

const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.USER_CREATE:
            if (action.account) {
                console.log(action);
                let message = Messages.MESSAGE_REGISTER_SUCCESSFULLY;
                state.push(message);
                console.log(state);
            } else {

            }
            return [...state];

        case Types.LOGIN_USER:
               if(action.account){
                let login_fail = {
                    login:'success'
                }
                localStorage.setItem("login",JSON.stringify(action.account));
                state.push(login_fail)
                action.history.goBack();
               }
                   let login_fail = {
                       login:'fail'
                   }
                   state.push(login_fail)
               
                
            return [...state];
            case Types.LOGOUT_USER:

                   localStorage.removeItem('login');
                   action.history.push('/account');
                   
            return [...state];  
        default:
            return [...state];
    }
}

export default myReducer;