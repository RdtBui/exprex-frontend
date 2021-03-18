
import $ from 'jquery'
import Popper from 'popper.js'

import Header from './components/Header'
import Footer from './components/Footer'

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import BecomeCourier from './pages/BecomeCourier';

function App() {
  return (
    <div>
      <Router>
        <div>
          {/* Add header here */}
          <Route path='/' exact render={() => (
            <>
              <Header />
              <Home />
            </>
          )} />
          <Route path='/about-us' component={AboutUs} />
          <Route path='/contact-us' component={ContactUs} />
          <Route path='/become-courier' component={BecomeCourier} />
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
