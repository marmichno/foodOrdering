import manageCheckoutReducer from './manageCheckout';
import cmsNavbarReducer from './showCmsNavbar';
import orderGroupIdReducer from './orderGroupId';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    manageCheckoutReducer,
    cmsNavbarReducer,
    orderGroupIdReducer
})

export default allReducers