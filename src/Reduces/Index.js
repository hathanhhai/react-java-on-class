import {combineReducers} from 'redux';
import Tour from './Home/Tour';
import Account from './Account/Account';
import Message from './Messages';
import TourOne from './Home/TourOne'
const Reducer = combineReducers({
    Tour,
    Account,
    Message,
    TourOne
});

export default Reducer;