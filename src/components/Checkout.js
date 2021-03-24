import {useEffect, useState} from 'react';
import {quantityMinus} from '../actions/index'
import {quantityPlus} from '../actions/index'
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import {IoIosAddCircleOutline} from 'react-icons/io'

const containerVariants = {
    hidden: {
        x: -1000
    },
    visible: {
        x: 0,
        transition: {
            type: 'tween',
            duration: 0.5
        }
    },
    exit: {
        x:-1000,
        transition: {ease: 'easeInOut', duration:0.5}
    }
  }



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

    
    if(order.length > 0){
        return(
                <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="orderToCheckout">
                    <div onClick={hideCheckout} className="hideCheckout"></div>
                    {order.map(value => {
                        return(
                            <div className="checkoutProduct">
                                <div className="productImage">
                                    <h1>{value.name}</h1>
                                </div>
                                <div className="productPriceData">
                                    <div>
                                        <p>Price:{(value.price * value.quantity).toFixed(2)}$</p>
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
                        <h1>Subtotal: {checkoutSum.toFixed(2)}$</h1>
                        <Link to={{
                            pathname:'/order/choose_delivery'
                        }}>
                            <button>Go to order details</button>
                        </Link>
                    </div>
                </motion.div>
        )

    }else{
        return(
            <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="orderToCheckout">
                <IoIosAddCircleOutline className="x" onClick={hideCheckout}/>
                <div className="emptyContainer" onClick={hideCheckout}>
                    <h1>Your cart is empty :(</h1>
                    <hr></hr>
                    <p>add something to cart to continue</p>
                </div>
            </motion.div>
        )
    }
}