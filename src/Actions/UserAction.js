import * as Actions from '../Constants/ActionType';
import  {callApi} from '../Utils/Api';

//--------- Create --------

export const registerAccountRequest = (account) =>{
    return dispatch =>{
        return callApi('user','POST',account).then(res=>{
            dispatch(registerAccount(res.data));
        });
    }
}

export const registerAccount = (account) =>{
    return {
        type:Actions.USER_CREATE,
        account
    }
}


//------------ login

export const loginRequest = (account,history) =>{
  
    return dispatch =>{
        return callApi('login','POST',account).then(res=>{
            dispatch(loginUser(res.data,history));
        }).catch(res=>{
            console.log(res);
        });
    }
}

export const loginUser = (account,history) =>{
    return {
        type:Actions.LOGIN_USER,
        account,
        history
    }
}

export const logoutUser = (history) =>{
    return {
        type:Actions.LOGOUT_USER,
        history
    }
}






