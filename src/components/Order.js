import {Carousel} from './common/Carousel';
import {useState, useEffect} from 'react';
import {motion, AnimatePresence} from 'framer-motion';

const containerVariants = {
    hidden: {
        x: -2000
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

export const Order = () => {

    const [currentActive, setCurrentActive] = useState(null);
    const foodTypes = ['Sushi rolls', 'Ramen', 'Prawns', 'Sets'];
    const [choosenFood, setChoosenFood] = useState('Sushi rolls');

    useEffect(() =>{
        const allHeaders = document.querySelectorAll('.foodHeadersContainer h1');
        allHeaders.forEach(element => element.classList.add('notActive'));
        allHeaders[0].classList.add('active');
        setCurrentActive(allHeaders[0].innerHTML);
    }, []);

    const changeActive = (e) => {
        const allHeaders = document.querySelectorAll('.foodHeadersContainer h1');
        allHeaders.forEach(element => element.classList.remove('active'));
        e.target.classList.add('active');
        setCurrentActive(e.target.innerHTML);
        setChoosenFood(e.target.innerHTML);
    }

    return(
        <div className="orderMainContainer">
            <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="foodHeadersContainer">
                {foodTypes.map(value => {
                    return <h1 onClick={changeActive}>{value}</h1>
                })}
            </motion.div>

            <Carousel choosenFood={choosenFood}/>

    </div>
    )
}