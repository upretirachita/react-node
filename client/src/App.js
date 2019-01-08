import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Presenters from './components/Presenters';
import Presenter from './components/Presenter';
import Home from './components/Home';
import Header from './components/Header';
import AddPresenter from './components/AddPresenter';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import PresenterDetail from './components/PresenterDetail';

function generateID() {
  var number = Math.random();
  number.toString(10);
  var id = number.toString(10).substr(2, 7);
  return id;
}

class App extends Component {
  state = {
    presenters:[],
    id:generateID(),
}
componentDidMount () {
    axios.get('/presenters').then((response) => {
        console.log(response);
        this.setState({
            presenters:response.data
        })
    })
}

deletePresenter = id => {
  const presenters = this.state.presenters.filter(presenter => presenter.id !== id);
  console.log("deleted",presenters);
  this.setState({
    presenters,
    flag: true
  });
};

  render() {
    return (
      <div className="App">
       <BrowserRouter>
        <div className="container">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/presenters/add"
            render = {props=>(
              <AddPresenter 
              {...props}
              id = {this.state.id}
              presenters={this.state.presenters}
             />)}
             />
            <Route path="/presenters"
            render = {props=>(
              <Presenters 
              {...props}
              presenters={this.state.presenters}
             />)} />
            <Route path="/presenter/:id"
             render = {props=>(
               <PresenterDetail 
               {...props}
               presenters={this.state.presenters}
               deletePresenter ={this.deletePresenter}
              />)} />
            
          </Switch>
        </div>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
