import {Carousel} from './common/Carousel';
import {Checkout} from './Checkout';
import {useState, useEffect} from 'react';

export const Order = () => {

    const [currentActive, setCurrentActive] = useState(null);
    const foodTypes = ['Sushi rolls', 'Ramen', 'Prawns', 'Sets'];
    const [choosenFood, setChoosenFood] = useState('Sushi rolls');
    const [showCheckout, setShowCheckout] = useState(false);
    const [orderProducts, setOrderProducts] = useState([])

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

    const addToCart = (e) => {
        const price = e.target.dataset.price;
        const name = e.target.dataset.name;

        const productData = {
            price,
            name,
            quantity: 1
        }

        if(orderProducts.length > 0){
            let updateFlag = 0;

            setOrderProducts(orderProducts.map(value =>{
                if(value.name === productData.name){
                    updateFlag++
                    return {
                        ...value,
                        quantity: value.quantity + 1
                    }
                }else{
                    return value;
                }
            }))
            if(updateFlag === 0){
                setOrderProducts([...orderProducts, productData]);
            }else{
                return null;
            }
        }else{
            setOrderProducts([...orderProducts, productData]);
        }
    }

    const quantityMinus = (product) =>{

        setOrderProducts(orderProducts.map(value =>{
            if(value.name === product){
                if(value.quantity > 1){
                    return{
                        ...value,
                        quantity: value.quantity - 1
                    }
                }else{
                    return 0;
                }
            }else{
                return value;
            }
        }).filter(value => value === 0 ? false : true));
    }

    const quantityPlus = (product) => {
        setOrderProducts(orderProducts.map(value => {
            if(value.name === product){
                return{
                    ...value,
                    quantity: value.quantity + 1
                }
            }else{
                return value;
            }
        }))
    }

    return(
        <div className="orderMainContainer">
            <div className="cart" onClick={checkout}></div>
            {showCheckout === true ? 
                <Checkout hideCheckout={checkout} orderProducts={orderProducts} quantityMinus={quantityMinus} quantityPlus={quantityPlus}/>
             : null}
            <div className="foodHeadersContainer">
                {foodTypes.map(value => {
                    return <h1 onClick={changeActive}>{value}</h1>
                })}
            </div>
            <div className="carouselContainer">
                <Carousel choosenFood={choosenFood} addToCart={addToCart}/>
            </div>
    </div>
    )
}