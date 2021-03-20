import {Link} from 'react-router-dom';

export const Delivery_details = () => {

    return(
        <div className="deliveryDetailsContainer">
            <div className="formContainer">
                <div className="nameContainer">
                    <div>
                        <label for="firstName">
                            <span className="contentName"><p>First Name</p></span>
                        </label>
                        <input type="text" autocomplete="off" name="category" className="firstSentenceInput" required></input>  
                    </div>

                    <div>
                    <label for="secondName">
                        <span className="contentName"><p>Last Name</p></span>
                    </label>
                    <input type="text" autocomplete="off" name="category" className="firstSentenceInput" required></input>
                    </div>
                </div>

                <label for="category">
                    <span className="contentName"><p>Phone number</p></span>
                </label>
                <input type="tel" autocomplete="off" name="category" className="firstSentenceInput" required></input>

                <label for="category">
                    <span className="contentName"><p>City</p></span>
                </label>
                <input type="tel" autocomplete="off" name="category" className="firstSentenceInput" required></input>

                <label for="category">
                    <span className="contentName"><p>Addres</p></span>
                </label>
                <input type="tel" autocomplete="off" name="category" className="firstSentenceInput" required></input>

                <label for="category">
                    <span className="contentName"><p>Delivery time</p></span>
                </label>
                <input type="time" autocomplete="off" name="category" className="firstSentenceInput" required></input>

                <label for="category">
                    <span className="contentName"><p>Additional notes</p></span>
                </label>
                <textarea autocomplete="off" name="category" className="firstSentenceInput" required></textarea>

                <Link to={{
                        pathname:'/order/choose_delivery/delivery_details/delivery_time'
                }}>
                <button>Confirm order details</button>
                </Link>
            </div>
        </div>
    )   
}