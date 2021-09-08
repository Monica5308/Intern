import logo from './logo.svg';
import './App.css';
import Login from './Login.js';
import Register from './Register.js';
import Display from './Display.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 
import { Component } from 'react';
import PickMap from './PickMap';
import Admin from './Admin';


  class App extends Component {
  
 render() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path='/'>
            <Login />
        </Route>
        <Route exact path='/register'>
         <Register />
        </Route>
        <Route exact path='/pickup'>
          <PickMap />
        </Route>
        <Route exact path='/display'>
          <Display />
        </Route>
        <Route exact path='/Admin'>
          <Admin />
        </Route>
      </Switch>
      
    </div>
    </Router>
  )
 }
}




export default App;
