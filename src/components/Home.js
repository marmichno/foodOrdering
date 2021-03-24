import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';

const containerVariants = {
    hidden: {
        x: 1000
    },
    visible: {
        x: 0,
        transition: {
            type: 'spring',
            stiffness: 120,
            mass: 0.4,
            damping: 8,
            staggerChildren:0.4,
            when:'beforeChildren'
        }
    },
    exit: {
        x:'-100vw',
        transition: {ease: 'easeInOut', duration:0.5}
    }
}

const childVariants = {
    hidden: {
        x: 1000
    },
    visible: {
        x: 0,
        transition: {
            type: 'spring',
            stiffness:60
        }
    }
}

const buttonVariants = {
    hover: {
        scale: 1.3,
        transition: {
            yoyo: Infinity,
            duration: 0.5,
            type: 'tween'
        }
    }
}

export const Home = () => {
    
    return(
        <div className="homeMainContainer">
            {/* <video src="/Videos/video.mp4" muted autoPlay></video>
            <div className="homeMainContainerOverlay"></div> */}
            <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="homeContentContainer">
                <motion.h1 variants={childVariants}>Freshly made sushi</motion.h1>
                <motion.h1 variants={childVariants}>Delicious ramen</motion.h1>
                <motion.h1 variants={childVariants}>Crispy prawns</motion.h1>
                <motion.h1 variants={childVariants}>Made with passion</motion.h1>
                <motion.hr variants={childVariants}></motion.hr>
                <motion.p variants={childVariants}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
                text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                Type and scrambled it to make a type specimen book.</motion.p>
                <motion.div className="homeButtons" variants={childVariants}>
                    <Link to={{
                        pathname:'/order'
                    }}>
                        <button>Order Online</button>
                    </Link>
                    <Link to={{
                        pathname:'/contact_us'
                    }}>
                        <button>Contact Us</button>
                    </Link>
                </motion.div>
            </motion.div>
         </div>
    )
}