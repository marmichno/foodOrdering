export const addProduct = (product) => {
    return{
        type: 'ADDPRODUCT',
        payload: product
    }
}

export const quantityMinus = (product) => {
    return{
        type: 'QUANTITYMINUS',
        payload: product
    }
}

export const quantityPlus = (product) => {
    return{
        type: 'QUANTITYPLUS',
        payload: product
    }
}