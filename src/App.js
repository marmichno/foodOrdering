import './resources/styles/styles.scss';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {Home} from './components/Home';
import {Order} from './components/Order';
import {Navbar} from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/order' component={Order}></Route>
      </Switch>
    </Router>
  );
}

export default App;
