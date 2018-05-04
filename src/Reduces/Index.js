import {combineReducers} from 'redux';
import Tour from './Home/Tour';
import Account from './Account/Account';
import Message from './Messages';
import TourOne from './Home/TourOne'
import Cart from './Cart/Cart';
const Reducer = combineReducers({
    Tour,
    Account,
    Message,
    TourOne,
    Cart
});

export default Reducer;