import manageCheckoutReducer from './manageCheckout';
import cmsNavbarReducer from './showCmsNavbar';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    manageCheckoutReducer,
    cmsNavbarReducer
})

export default allReducers