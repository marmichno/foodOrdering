import {Products} from '../products/Products';
import {ProductsGroups} from '../productsGroups/ProductsGroups';
import {CgScrollV} from 'react-icons/cg';
import {motion} from 'framer-motion';


const scrollContainerVariants = {
    hidden: {
        y: 500
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
        y:500,
        transition: {ease: 'easeInOut', duration:0.5}
    }
}

const bouncyAnimation = {
    visible: {
        scale: 1.1,
        transition: {
            duration:0.3,
            yoyo:Infinity
        }
    }
}

export const Order = () => {

    return(
        <div className="orderMainContainer" data-testid="orderContainer">
            
            <ProductsGroups/>
            <Products/>

            <motion.div
            variants={scrollContainerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="scroll">
                <motion.div
                variants={bouncyAnimation}
                animate="visible" 
                className="icon">
                    <CgScrollV/>
                </motion.div>
            </motion.div>
    </div>
    )
}

export default Order;
