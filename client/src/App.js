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
    id:generateID()
}
componentDidMount () {
    axios.get('/presenters').then((response) => {
        console.log(response);
        this.setState({
            presenters:response.data
        })
    })
}

deletePresenter = _id => {
  const presenters = this.state.presenters.filter(presenter => presenter._id !== _id);
  console.log("deleted",presenters);
  this.setState({
    presenters,
    flag: true
  });
  axios
  .delete (`/presenters/${_id}`)
  .then (response => {
   //console.log ('I am responding',response);
 })
 .catch (err => console.log (err));
 console.log("First",_id)
};


/*
deletePresenter = (presenter) => {
  const updatedVal = this.state.presenters.filter(pre => pre._id !== presenter._id);
  this.setState({
  presenters: updatedVal,
    flag:true
});
  axios
 .delete (`/presenters/${presenter._id}`)
 .then (response => {
  //console.log ('I a m response',response);
})
.catch (err => console.log (err));
}
*/

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
              id = {this._id}
              presenters={this.state.presenters}
             />)}
             />
            <Route path="/presenters"
            render = {props=>(
              <Presenters 
              {...props}
              presenters={this.state.presenters}
             />)} />
            <Route path="/presenter/:_id"
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
