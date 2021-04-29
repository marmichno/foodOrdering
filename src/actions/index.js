export const showCmsNavbar = (status) => {
    return{
        type: 'SHOWCMSNAVBAR',
        payload: status
    }
}

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

export const changeOrderGroupId = (id) => {
    return{
        type: 'CHANGEID',
        payload: id
    }
}