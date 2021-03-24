import {GiSushis} from 'react-icons/gi'
import {Checkout} from './Checkout';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {motion, AnimatePresence} from 'framer-motion';
import {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';

const logoVariants = {
    hidden: {
        y: -500
    },
    visible: {
        y: 0,
        transition: {
            type: 'spring',
            delay: 0.5,
            mass: 1,
            damping: 12
        }
    }
}

const cartVariants = {
    hidden: {
        y: -500
    },
    visible: {
        y: 0,
        transition: {
            type: 'spring',
            delay: 0.5,
            mass: 1,
            damping: 12
        }
    },
    exit: {
        y:-500,
        transition: {ease: 'easeInOut', duration:0.5}
    }
}

export const Navbar = () => {

    const order = useSelector(state => state.manageCheckoutReducer);
    const location = window.location.href;
    const [showCheckout, setShowCheckout] = useState(false);
    const [quantityNumber, setQuantityNumber] = useState(0);

    useEffect(() => {
        if(order.length > 0){
            setQuantityNumber(order.map(value => value.quantity).reduce((a, b) => a + b));
        }else{
            setQuantityNumber(0);
        }
    },[order])
    
    const checkout = () => {
        setShowCheckout(!showCheckout);
    }

    useEffect(() => {
        setShowCheckout(false);
    },[location])

    return(
        <>
        <div className="navbar">
            <AnimatePresence>
            {location === 'http://localhost:3000/order' || location === 'http://localhost:3000/order/choose_delivery' || location === 'http://localhost:3000/order/choose_delivery/delivery_details'  ?
                <motion.div
                variants={cartVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="cart" >
                <div onClick={checkout}>
                    <AiOutlineShoppingCart></AiOutlineShoppingCart>
                    <h1>{quantityNumber}</h1>
                </div>
                </motion.div>
            : null}
            </AnimatePresence>
            <motion.div
            variants={logoVariants}
            initial="hidden"
            animate="visible"
            className="navbarLogo"><p>Sushi sakana</p><GiSushis /></motion.div>
        </div>
        <AnimatePresence>
            {showCheckout === true ? 
            <Checkout hideCheckout={checkout}/>
            : null}
        </AnimatePresence>
        </>
    )
}