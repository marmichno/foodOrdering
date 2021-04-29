import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import { useHistory } from "react-router-dom";

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

    let history = useHistory();
    
    const changeLocation = (deliveryType) => {

        const location = {
            pathname: '/order/choose_delivery/delivery_details',
            state: {
                deliveryType:deliveryType
            }
        }

        history.push(location);
    }

    return(
        <div className="chooseDeliveryContainer">
                <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="chooseDeliveryTextContainer">
                    <h1>Choose delivery option</h1>
                    <button onClick={() => changeLocation('pickUp')}>I will pick it up</button>
                    <button onClick={() => changeLocation('delivery')}>I want to order with delivery</button>
                </motion.div>
        </div>
    )
}