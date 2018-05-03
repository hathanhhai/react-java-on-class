import * as Actions from '../Constants/ActionType';
import {callApi} from '../Utils/Api';

//--------- GET --------

export const fetchTourRequest = ()=>{
    return (dispatch)=>{
        return callApi('tour','GET',null).then(res=>{
            console.log()
            dispatch(fetchTour(res.data));
        })
    }
}

export const fetchTour = (tour) =>{
    return{
        type:Actions.FETCH_TOUR,
        tour
    }
}


// get id
export const fetchTourOneRequest = (id)=>{
    return (dispatch)=>{
        return callApi(`tour/${id}`).then(res=>{
          
            dispatch(fetchOne(res.data));
        })
    }
}

export const fetchOne = (tour) =>{
    return{
        type:Actions.FETCH_TOUR_ONE,
        tour
    }
}
