import {Link} from 'react-router-dom';

export const Home = () => {
    return(
        <div className="homeMainContainer">
            <video src="/Videos/video.mp4" muted autoPlay></video>
            <div className="homeMainContainerOverlay"></div>
            <div className="homeContentContainer">
                <h1>Freshly made sushi</h1><h1>Delicious ramen</h1><h1>Crispy prawns</h1><h1>Made with passion</h1>
                <hr></hr>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
                text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Type and scrambled it to make a type specimen book.</p>
                <div className="homeButtons">
                    <Link to={{
                        pathname:'/order'
                    }}>
                        <button>Order Online</button>
                    </Link>
                    <button>Contact Us</button>
                    <button>Make reservation</button>
                </div>
            </div>
         </div>
    )
}