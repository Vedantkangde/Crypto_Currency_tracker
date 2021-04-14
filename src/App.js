
import './App.css';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Home from './pages';
import SigninPage from './pages/signin';

import Navbar from './components/Navbar';
import Calender from './pages/Calender';
import SolarSystem from './pages/Solar';
import MyCalender from './components/Calender';


function App() {
  return (
   
    <Router>

       <Switch>
        <Route path="/" component={Home} exact/>
        <Route path='/signin' component={SigninPage} exact />
        <Route path='/Calender' component={Calender} exact/>
        <Route path='/Solar' component={SolarSystem} exact />

        </Switch>
      
     
      </Router>
  );
}

export default App;
