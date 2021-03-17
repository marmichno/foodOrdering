import {Carousel} from './common/Carousel';
import {Checkout} from './Checkout';
import {useState, useEffect} from 'react';

export const Order = () => {

    const [currentActive, setCurrentActive] = useState(null);
    const foodTypes = ['Sushi rolls', 'Ramen', 'Prawns', 'Sets'];
    const [choosenFood, setChoosenFood] = useState('Sushi rolls');
    const [showCheckout, setShowCheckout] = useState(false);

    useEffect(() =>{
        const allHeaders = document.querySelectorAll('.foodHeadersContainer h1');
        allHeaders.forEach(element => element.classList.add('notActive'));
        allHeaders[0].classList.add('active');
        setCurrentActive(allHeaders[0].innerHTML);
    }, [])

    const changeActive = (e) => {
        const allHeaders = document.querySelectorAll('.foodHeadersContainer h1');
        allHeaders.forEach(element => element.classList.remove('active'));
        e.target.classList.add('active');
        setCurrentActive(e.target.innerHTML);
        setChoosenFood(e.target.innerHTML);
    }

    const checkout = () => {
        setShowCheckout(!showCheckout);
    }

    return(
        <div className="orderMainContainer">
            <div className="cart" onClick={checkout}></div>
            {showCheckout === true ? 
                <Checkout hideCheckout={checkout}/>
             : null}
            <div className="foodHeadersContainer">
                {foodTypes.map(value => {
                    return <h1 onClick={changeActive}>{value}</h1>
                })}
            </div>
            <div className="carouselContainer">
                <Carousel choosenFood={choosenFood}/>
            </div>
    </div>
    )
}