import './App.scss';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './containers/Home';
import About from './containers/About';
import Services from './containers/Services';
import Career from './containers/Career';
import Contact from './containers/Contact';

const App = () => (
    <div className="App">
     <Router>
        <Header />
          <div className="middle-wrapper">
            <Route path="/" exact component={Home}/>
            <Route path="/about" exact component={About} />
            <Route path="/services" exact component={Services}/>
            <Route path="/career" exact component={Career} />
            <Route path="/contact" exact component={Contact}/>
          </div>
        <Footer />
      </Router>
    </div>
  );

export default App;
