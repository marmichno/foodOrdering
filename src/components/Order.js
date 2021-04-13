import {Carousel} from './common/Carousel';
import {useState, useEffect} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {IoMdArrowDropdownCircle} from 'react-icons/io';
import {CgScrollV} from 'react-icons/cg';
import {groupGetRequest} from '../requests/groupGetRequest';


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

const dropdownVariants = {
    hidden: {
        y: -500
    },
    visible: {
        y: 0,
        transition: {
            type: 'spring',
            mass: 1,
            damping: 15
        }
    },
    exit: {
        scale:0.01,
        transition: {ease: 'easeInOut', duration:0.5}
    }
}

export const Order = () => {

    const [selectedGroup, setSelectedGroup] = useState([]);
    const [productGroups, setProductGroups] = useState([]);
    const [groupId, setGroupId] = useState(null);
    const [showProductGroups, setShowProductGroups] = useState(false);

    useEffect(() =>{
        getGroups();
    }, []);


    const getGroups = async () =>{
        const response = await groupGetRequest();
        if(response !== undefined){
            setProductGroups(response);
            setSelectedGroup(response[0].name);
            setGroupId(response[0].id);
        }else{
            return;
        }
    }

    const changeActive = (e) => {
        const allHeaders = document.querySelectorAll('.foodHeadersContainer .foodTypesContainer .dropdown .toggle');
        allHeaders.forEach(element => element.classList.remove('active'));
        e.target.classList.add('active');
        setSelectedGroup(e.currentTarget.innerHTML);
        setGroupId(e.currentTarget.dataset.id);
    }


    

    return(
        <div className="orderMainContainer">
            <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="foodHeadersContainer">
                <div className="foodGroupsContainer">
                    <div className="list">
                        <div className="selected"><h1>{selectedGroup !== undefined ? selectedGroup : null}</h1><hr></hr></div>
                        <div className="toggle" onClick={() => setShowProductGroups(!showProductGroups)}><IoMdArrowDropdownCircle/></div>
                        <AnimatePresence>
                            {showProductGroups === true ?
                                <motion.div className="dropdown"
                                    variants={dropdownVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    >
                                    {productGroups !== undefined ?
                                    productGroups.map(value => {
                                        return <div className="dropdownList"><h1 data-id={value.id} onClick={changeActive}>{value.name}</h1></div>
                                    })
                                    : null
                                    }
                                </motion.div>
                            : null
                        }
                        </AnimatePresence>
                    </div>
                </div>
            </motion.div>

            <Carousel groupId={groupId}/>
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