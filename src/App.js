import Header from './components/Header'
import Footer from './components/Footer'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import $ from 'jquery'
import Popper from 'popper.js'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import BecomeCourier from './pages/BecomeCourier';

function App() {
  return (
    <div>
      {/* <Header /> */}
      <Router>
        <div>
          <Header />
          <Route path='/' exact render={() => (
            <>
              <Home />
            </>
          )} />
          <Route path='/about-us' component={AboutUs} />
          <Route path='/contact-us' component={ContactUs} />
          <Route path='/become-courier' component={BecomeCourier} />
        </div>
      </Router>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
