import './resources/styles/styles.scss';
import './resources/styles/managementStyles/managementStyles.scss';
import {Home} from './components/Home';
import {Order} from './components/Order';
import {Choose_delivery} from './components/Choose_delivery';
import {Navbar} from './components/Navbar';
import {Delivery_details} from './components/Delivery_details';
import {DeliveryTime} from './components/Delivery_time';
import {ContactUs} from './components/ContactUs';
import {CmsLogin} from './managementComponents/CmsLogin';
import {CmsMainPage} from './managementComponents/CmsMainPage';
import {CmsProductsManagement} from './managementComponents/CmsProductsManagement';
import {CmsEmployees} from './managementComponents/CmsEmployees';
import {CmsEmployeesSchedule} from './managementComponents/CmsEmployeeSchedule';
import {CmsPromotions} from './managementComponents/CmsPromotions';
import {CmsProductGroups} from './managementComponents/CmsProductGroups';
import {BrowserRouter as Router, Switch, Route, useLocation} from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';

function App() {
  const location = useLocation();

  return (
    <>
      <Navbar/>
      <AnimatePresence>
        <Switch location={location} key={location.key}>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/contact_us' component={ContactUs}></Route>
          <Route exact path='/order' component={Order}></Route>
          <Route exact path='/order/choose_delivery' component={Choose_delivery}></Route>
          <Route exact path='/order/choose_delivery/' component={Choose_delivery}></Route>
          <Route exact path='/order/choose_delivery/delivery_details' component={Delivery_details}></Route>
          <Route exact path='/order/choose_delivery/delivery_details/delivery_time' component={DeliveryTime}></Route>
          <Route exact path='/cmsLogin' component={CmsLogin}></Route>
          <Route exact path='/cmsLogin/cms' component={CmsMainPage}></Route>
          <Route exact path="/cmsLogin/cms/productManagement" component={CmsProductsManagement}></Route>
          <Route exact path="/cmsLogin/cms/employees" component={CmsEmployees}></Route>
          <Route exact path="/cmsLogin/cms/employeesSchedule" component={CmsEmployeesSchedule}></Route>
          <Route exact path="/cmsLogin/cms/promotions" component={CmsPromotions}></Route>
          <Route exact path="/cmsLogin/cms/productGroups" component={CmsProductGroups}></Route>
        </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;
