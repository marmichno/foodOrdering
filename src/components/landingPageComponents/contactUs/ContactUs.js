import {motion} from 'framer-motion';
import {AiFillPhone} from 'react-icons/ai'
import {AiOutlineMail} from 'react-icons/ai'

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

export const ContactUs = () => {

    return(
        <div className="contactUsMainContainer">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="contactUsContainer">

                <div className="mapContainer"><h1>There will be map</h1></div>
      
                <div className="contactUsTextContainer">
                    <p><AiFillPhone/> 600 500 400</p>
                    <p><AiOutlineMail/> somemail@gmail.com</p>
                </div>
            </motion.div>
        </div>
    )
}