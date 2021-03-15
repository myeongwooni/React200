import React, { Component } from 'react';
import { Route } from "react-router-dom";
import '../css/new.css';
import HeaderAdmin from './Header/Header admin';
import Footer from './Footer/Footer';
import LoginForm from './LoginForm';
import reactDebounce from './R094_reactDebounce';
import reactThrottle from './R095_reactThrottle';
import floatingPopulationList from './Floating_population/floatingPopulationList';
import rechartsSimpleLineChart from './Floating_population/rechartsSimpleLineChart';
import floatingPopulationListChart from './Floating_population/floatingPopulationListChart';

class App extends Component {
  render () {
    return (
      <div className="App">
        <HeaderAdmin/>
        <Route exact path='/' component={LoginForm}/>
        <Route exact path='/Debounce' component={reactDebounce}/>
        <Route exact path='/Throttle' component={reactThrottle}/>
        <Route exact path='/floatPopulationList' component={floatingPopulationList}/>
        <Route exact path='/rechartsSimpleLineChart' component={rechartsSimpleLineChart}/>
        <Route exact path='/floatingPopulationListChart' component={floatingPopulationListChart}/>
        <Footer />
      </div>
    );
  }
}

export default App;