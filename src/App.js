import './resources/styles/styles.scss';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'leaflet/dist/leaflet.css';
import {Home} from './components/Home';
import {Order} from './components/Order';
import {Choose_delivery} from './components/Choose_delivery';
import {Navbar} from './components/Navbar';
import {Delivery_details} from './components/Delivery_details';
import {DeliveryTime} from './components/Delivery_time';
import {ContactUs} from './components/ContactUs';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {

  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/contact_us' component={ContactUs}></Route>
        <Route exact path='/order' component={Order}></Route>
        <Route exact path='/order/choose_delivery' component={Choose_delivery}></Route>
        <Route exact path='/order/choose_delivery/' component={Choose_delivery}></Route>
        <Route exact path='/order/choose_delivery/delivery_details' component={Delivery_details}></Route>
        <Route exact path='/order/choose_delivery/delivery_details/delivery_time' component={DeliveryTime}></Route>
      </Switch>
    </Router>
  );
}

export default App;
