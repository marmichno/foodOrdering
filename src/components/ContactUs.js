import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
  } from "react-google-maps";

  import {AiFillPhone} from 'react-icons/ai'
  import {AiOutlineMail} from 'react-icons/ai'

export const ContactUs = () => {

    const API_KEY = 'AIzaSyDmpWYJAee_72ryefb9BT-aqcwF2Cbc_mY';

    const MapWithAMarker = withScriptjs(withGoogleMap(props =>
        <GoogleMap
          defaultZoom={15}
          defaultCenter={{ lat: 50.220860, lng: 18.669770 }}
        >
          <Marker
            position={{ lat: 50.220860, lng: 18.669770 }}
          />
        </GoogleMap>
      ));

    return(
        <div className="orderMainContainer">
            <div className="contactUsContainer">
            <MapWithAMarker
            googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyDmpWYJAee_72ryefb9BT-aqcwF2Cbc_mY&v=3.exp&libraries=geometry,drawing,places'
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `80%`, width: `100%` }} />}
            mapElement={<div style={{ height: `100%`, width: '100%' }} />}
            />
                <div className="contactUsTextContainer">
                    <p><AiFillPhone/> 600 500 400</p>
                    <p><AiOutlineMail/> somemail@gmail.com</p>
                </div>
            </div>
        </div>
    )
}