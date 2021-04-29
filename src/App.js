import './resources/styles/styles.scss';
import './resources/styles/managementStyles.scss';
import {Home} from './components/landingPageComponents/home/Home';
import {Order} from './components/landingPageComponents/order/Order';
import {Choose_delivery} from './components/landingPageComponents/choose_delivery/Choose_delivery';
import {Navbar} from './components/landingPageComponents/navbar/Navbar';
import {Delivery_details} from './components/landingPageComponents/delivery_details/Delivery_details';
import {DeliveryTime} from './components/landingPageComponents/delivery_time/Delivery_time';
import {ContactUs} from './components/landingPageComponents/contactUs/ContactUs';
import {CmsLogin} from './components/managementComponents/cmsLogin/CmsLogin';
import {CmsMainPage} from './components/managementComponents/cmsMainPage/CmsMainPage';
import {CmsProductsManagement} from './components/managementComponents/cmsProductsManagement/CmsProductsManagement';
import {CmsEmployees} from './components/managementComponents/cmsEmployees/CmsEmployees';
import {CmsEmployeesSchedule} from './components/managementComponents/cmsEmployeeSchedule/CmsEmployeeSchedule';
import {CmsPromotions} from './components/managementComponents/cmsPromotions/CmsPromotions';
import {CmsProductGroups} from './components/managementComponents/cmsProductGroups/CmsProductGroups';
import {CmsEmployeesRoles} from './components/managementComponents/cmsEmployeesRoles/CmsEmployeesRoles';
import {BrowserRouter as Router, Switch, Route, useLocation, BrowserRouter} from 'react-router-dom';
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
                <Route exact path="/cmsLogin/cms/employeesRoles" component={CmsEmployeesRoles}></Route>
          </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;
