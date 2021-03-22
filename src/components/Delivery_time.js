import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';

const containerVariants = {
  hidden: {
      x: 2000
  },
  visible: {
      x: 0,
      transition: {
        type: 'spring',
        delay: 0.5,
        mass: 1,
        damping: 12
      }
  },
  exit: {
      x:'-100vw',
      transition: {ease: 'easeInOut', duration:0.5}
  }
}

export const DeliveryTime = () => {
    return(
        <div className="orderMainContainer">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit" 
                className="deliveryTimeContainer">
                <h1>Thanks for your order :)</h1>
                <p>Your order will be delivered in: <b>00:30</b></p>
                <p>Order number: <b>#245687</b></p>
                <Link to={{
                        pathname:'/contact_us'
                }}>
                    <button>Contact us</button>
                </Link>
            </motion.div>
        </div>
    )
}