import {Link} from 'react-router-dom';

export const Choose_delivery = () => {

    return(
        <div className="chooseDeliveryContainer">
                <div className="chooseDeliveryTextContainer">
                    <h1>Choose delivery option</h1>
                    <Link to={{
                        pathname:'/order/choose_delivery/delivery_details'
                    }}>
                        <button>I will pick it up</button>
                    </Link>
                    <Link to={{
                        pathname:'/order/choose_delivery/delivery_details'
                    }}>
                        <button>I want to order with delivery</button>
                    </Link>
                </div>
        </div>
    )
}