import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import {HiCash} from 'react-icons/hi';
import {FaCcMastercard} from 'react-icons/fa';
import {ImCheckboxChecked} from 'react-icons/im';
import {useState, useEffect} from 'react';
import {useSelector} from'react-redux';



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

export const Delivery_details = (state) => {

    const order = useSelector(state => state.manageCheckoutReducer);
    const [checkoutSum, setCheckoutSum] = useState(0);
    const [paymentType, setPaymentType] = useState("");
    const deliveryType = state.location.state.deliveryType;

    useEffect(() => {
        if(order.length > 0){
            setCheckoutSum(order.map(value => value.price * value.quantity).reduce((a, b) => a + b))
        }
    },[order]);

    const changePaymentType = (e) => {
        const selected = e.target;

        document.querySelectorAll(".deliveryDetailsContainer .formContainer .formCheckboxes div .active").forEach(element => element.classList.remove('active'));

        selected.classList.add('active')

        setPaymentType(selected.dataset.paymentType);
    }

    return(
        <div className="deliveryDetailsContainer">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit" 
                className="formContainer">
                <div className="nameContainer">
                    <div>
                        <label for="firstName">
                            <span className="contentName"><p>First Name</p></span>
                        </label>
                        <input type="text" autocomplete="off" name="category" className="firstSentenceInput" required></input>  
                    </div>

                    <div>
                    <label for="secondName">
                        <span className="contentName"><p>Last Name</p></span>
                    </label>
                    <input type="text" autocomplete="off" name="category" className="firstSentenceInput" required></input>
                    </div>
                </div>

                <label for="category">
                    <span className="contentName"><p>Phone number</p></span>
                </label>
                <input type="tel" autocomplete="off" name="category" className="firstSentenceInput" required></input>

                {deliveryType === 'delivery' ? 
                <>
                <label for="category">
                    <span className="contentName"><p>City</p></span>
                </label>
                <input type="tel" autocomplete="off" name="category" className="firstSentenceInput" required></input>

                <label for="category">
                    <span className="contentName"><p>Addres</p></span>
                </label>
                <input type="tel" autocomplete="off" name="category" className="firstSentenceInput" required></input>
                </>
                : null}

                <label for="category">
                    <span className="contentName"><p>Additional notes</p></span>
                </label>
                <textarea autocomplete="off" name="category" className="firstSentenceInput" required></textarea>

                <div className="formCheckboxes">
                    <div>
                        <p>Payment in advance</p>
                        <ImCheckboxChecked data-paymentType='advance' onClick={changePaymentType}/>
                    </div>

                    <div>
                        <p>Payment on delivery</p>
                        <ImCheckboxChecked data-paymentType='delivery' onClick={changePaymentType}/>
                    </div>
                </div>

                <h1>Total amount: {checkoutSum.toFixed(2)}$</h1>
                <Link to={{
                        pathname:'/order/choose_delivery/delivery_details/delivery_time'
                }}>
                <button>Confirm order details</button>
                </Link>
            </motion.div>
        </div>
    )   
}