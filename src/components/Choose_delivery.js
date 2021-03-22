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

export const Choose_delivery = () => {

    return(
        <div className="chooseDeliveryContainer">
                <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="chooseDeliveryTextContainer">
                    <h1>Choose delivery option</h1>
                    <Link to={{
                        pathname:'/order/choose_delivery/delivery_details'
                    }}>
                        <button>I will pick it up</button>
                    </Link>
                    <Link to={{
                        pathname:'/order/choose_delivery/delivery_details'
                    }}>
                        <button>I want to order with delivery</button>
                    </Link>
                </motion.div>
        </div>
    )
}