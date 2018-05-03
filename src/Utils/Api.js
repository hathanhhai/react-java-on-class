import axios from 'axios';
import * as config from '../Constants/Config';


export const  callApi=(url,method='GET',body)=>{
    return  axios({
         method:method,
         url:`${config.API_USER}/${url}`,
         data:body
     }).catch(err=>console.log(err))
 }
 