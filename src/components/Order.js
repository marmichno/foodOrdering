import {Carousel} from './common/Carousel';

export const Order = () => {
    return(
        <div className="orderMainContainer">
            <div className="foodHeadersContainer">
                <h1>Sushi rolls</h1><h1>Ramen</h1><h1>Prawns</h1><h1>Sets</h1>
            </div>
            <div className="carouselContainer">
                <Carousel/>
            </div>
    </div>
    )
}