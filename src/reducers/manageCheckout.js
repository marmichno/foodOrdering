const manageCheckoutReducer = (state = localStorage.getItem('order'), action) => {

    const product = action.payload;
    state = JSON.parse(localStorage.getItem('order'));

    
    const alwaysTwoDecimals = (num) => {
        return (Math.round(num * 100) / 100).toFixed(2);
    }

    switch(action.type){
        
        case 'ADDPRODUCT':
    
            if(state !== null){
                let updateFlag = 0;
    
                state = state.map(value =>{
                    if(value.name === product.name){
                        updateFlag++
                        return {
                            ...value,
                            quantity: value.quantity + 1
                        }
                    }else{
                        return value;
                    }
                })
                if(updateFlag === 0){
                    state =  [...state, product];
                }else{
                    localStorage.setItem('order', JSON.stringify(state));
                    return state;
                }
            }else{
                state = [product];
            }

            localStorage.setItem('order', JSON.stringify(state));
            return state;
        
        case 'QUANTITYPLUS':

            state = state.map(value => {
                if(value.name === product){
                    return{
                        ...value,
                        quantity: value.quantity + 1
                    }
                }else{
                    return value;
                }
            })
            localStorage.setItem('order', JSON.stringify(state));
            return state;

        case 'QUANTITYMINUS':

            state = state.map(value =>{
                if(value.name === product){
                    if(value.quantity > 1){
                        return{
                            ...value,
                            quantity: value.quantity - 1
                        }
                    }else{
                        return 0;
                    }
                }else{
                    return value;
                }
            }).filter(value => value === 0 ? false : true);

            localStorage.setItem('order', JSON.stringify(state));
            return state;


        case 'CHECKOUTSUM':

            return state.map(value => value.price * value.quantity).reduce((a, b) => a + b);

            default:
                return state;
    }
}

export default manageCheckoutReducer