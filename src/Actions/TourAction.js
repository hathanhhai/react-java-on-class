import * as Actions from '../Constants/ActionType';
import {callApi} from '../Utils/Api';

//--------- GET --------

export const fetchTourRequest = ()=>{
    return (dispatch)=>{
        return callApi('tour','GET',null).then(res=>{
            if(res){
                dispatch(fetchTour(res.data));
            }
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
            dispatch(
                
                fetchOne(res.data)
            );
        })
    }
}

export const fetchOne = (tour) =>{
    return{
        type:Actions.FETCH_TOUR_ONE,
        tour
    }
}

export const saveTourRequest = (tour) =>{
    return dispatch=>{
        return callApi("addtour","post",tour).then(res=>{
            dispatch(saveTour(tour))
        })
    }
}

export const saveTour = (tour)=>{
    return {
        type:Actions.CRAETE_TOUR,
        tour
    }
}


//delete
export const deleteTourRequest = (id) =>{
    return dispatch=>{
        return callApi(`deletetour/${id}`,"post",null).then(res=>{
            dispatch(deleteTour(id))
        })
    }
}

export const deleteTour = (id) =>{
    return {
        type:Actions.DELETE_TOUR,
        id
    }
}