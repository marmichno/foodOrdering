import {Link} from 'react-router-dom';

export const DeliveryTime = () => {
    return(
        <div className="orderMainContainer">
            <div className="deliveryTimeContainer">
                <h1>Thanks for your order :)</h1>
                <p>Your order will be delivered in: <b>00:30</b></p>
                <p>Order number: <b>#245687</b></p>
                <Link to={{
                        pathname:'/contact_us'
                }}>
                    <button>Contact us</button>
                </Link>
            </div>
        </div>
    )
}