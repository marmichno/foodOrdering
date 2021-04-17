const cmsNavbarReducer = (state = false, action) => {
    switch(action.type){
        case 'SHOWCMSNAVBAR':
            return !state;

        default:
            return state;
    }
}

export default cmsNavbarReducer;