const orderGroupIdReducer = (state = null, action) => {

    const id = action.payload;

    switch(action.type){

        case 'CHANGEID':
            console.log(id);
            state = id;
            return state;

        default:
            return state;
    }
}

export default orderGroupIdReducer;