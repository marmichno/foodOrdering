import {Carousel} from './common/Carousel';
import {useState, useEffect} from 'react';

export const Order = () => {

    const [currentActive, setCurrentActive] = useState(null);
    const foodTypes = ['Sushi rolls', 'Ramen', 'Prawns', 'Sets'];

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
    }

    useEffect(() =>{
        console.log(currentActive);
    }, [currentActive])

    return(
        <div className="orderMainContainer">
            <div className="foodHeadersContainer">
                {foodTypes.map(value => {
                    return <h1 onClick={changeActive}>{value}</h1>
                })}
            </div>
            <div className="carouselContainer">
                <Carousel/>
            </div>
    </div>
    )
}