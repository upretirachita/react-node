import React, { Component } from 'react';
import './App.css';
import Presenters from './components/Presenters';
import Presenter from './components/Presenter';
import Home from './components/Home';
import Header from './components/Header';
import AddPresenter from './components/AddPresenter';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import PresenterDetail from './components/PresenterDetail';

class App extends Component {


  render() {
    return (
      <div className="App">
       <BrowserRouter>
        <div className="container">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/presenters/add" component={AddPresenter} />
            <Route path="/presenters" component={Presenters} />
            <Route path="/presenter/:id"
             render = {props=>(
               <PresenterDetail 
               {...props}
              
              />)} />
            
          </Switch>
        </div>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
