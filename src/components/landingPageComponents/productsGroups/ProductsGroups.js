import {motion, AnimatePresence} from 'framer-motion';
import {IoMdArrowDropdownCircle} from 'react-icons/io';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {groupGetRequest} from '../../../requests/groupGetRequest';
import {changeOrderGroupId} from '../../../actions';

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

export const ProductsGroups = () => {

    const productGroupId = useSelector(state => state.orderGroupIdReducer);
    const dispatch = useDispatch();

    const [selectedGroup, setSelectedGroup] = useState([]);
    const [productGroups, setProductGroups] = useState([]);
    const [showProductGroups, setShowProductGroups] = useState(false);
    const [groupId, setGroupId] = useState(productGroupId);

    useEffect(() =>{
        getGroups();
    }, []);

    useEffect(() => {
        dispatch(changeOrderGroupId(groupId));
    },[groupId]);

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
            <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="foodHeadersContainer">
                <div className="foodGroupsContainer">
                    <div className="list">
                        <div className="selected"><h1 data-testid="selected">{selectedGroup !== undefined ? selectedGroup : null}</h1><hr></hr></div>
                        <div className="toggle" data-testid="dropDown" onClick={() => setShowProductGroups(!showProductGroups)}><IoMdArrowDropdownCircle/></div>
                        <AnimatePresence>
                            {showProductGroups === true ?
                                <motion.div className="dropdown"
                                    variants={dropdownVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    >
                                    {productGroups !== undefined ?
                                    productGroups.map((value, index) => {
                                        return <div key={value.id} className="dropdownList"><h1 data-id={value.id} data-testid={`group${index}`} onClick={changeActive}>{value.name}</h1></div>
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
        )
}

export default ProductsGroups;