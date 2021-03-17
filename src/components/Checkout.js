import {useEffect, useState} from 'react';
import {quantityMinus} from '../actions/index'
import {quantityPlus} from '../actions/index'
import {useDispatch, useSelector} from 'react-redux';


export const Checkout = ({hideCheckout}) => {

    const [checkoutSum, setCheckoutSum] = useState(0);
    const dispatch = useDispatch();
    const order = useSelector(state => state.manageCheckoutReducer);

    useEffect(() => {
        if(order.length > 0){
            setCheckoutSum(order.map(value => value.price * value.quantity).reduce((a, b) => a + b))
        }
    },[order]);

    const changeQuantity = (e) => {
        const whichProduct = e.target.dataset.name;
        const removeOrAdd = e.target.innerHTML;

        if(removeOrAdd === '+'){
            dispatch(quantityPlus(whichProduct));
        }else{
            dispatch(quantityMinus(whichProduct));
        }
    }

    const alwaysTwoDecimals = (num) => {
        return (Math.round(num * 100) / 100).toFixed(2);
    } 

    
    if(order.length > 0){
        return(
            <div className="orderToCheckout">
                <div onClick={hideCheckout} className="hideCheckout"></div>
                {order.map(value => {
                    return(
                        <div className="checkoutProduct">
                            <div className="productImage">
                                <h1>{value.name}</h1>
                            </div>
                            <div className="productPriceData">
                                <div>
                                    <p>Price:{alwaysTwoDecimals(value.price * value.quantity)}$</p>
                                </div>
                                <div>
                                    <button onClick={changeQuantity} className="plus" data-name={value.name}>+</button>
                                    <p>quantity:{value.quantity}</p>
                                    <button onClick={changeQuantity} className="minus" data-name={value.name}>-</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
                <div className="checkoutSum">
                    <div>
                        <hr></hr>
                    </div>
                    <h1>Subtotal: {alwaysTwoDecimals(checkoutSum)}$</h1>
                    <button>Go to order details</button>
                </div>
            </div>
        )

    }else{
        return(
            <div className="orderToCheckout">
                <div onClick={hideCheckout}>hide</div>
            </div>
        )
    }
}