import React, {Component} from 'react';
import axios from 'axios';
import './AddPresentation.css';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';


function displayDateTime() {
  var today = new Date();
  var year = today.getFullYear();
  var month = new Array();
  month[0] = "1";
  month[1] = "2";
  month[2] = "3";
  month[3] = "4";
  month[4] = "5";
  month[5] = "6";
  month[6] = "7";
  month[7] = "8";
  month[8] = "9";
  month[9] = "10";
  month[10] = "11";
  month[11] = "12";

  var d = new Date();
  var n = month[d.getMonth()];

  var date = today.getDate();
  var hours = today.getHours();
  var minute = today.getMinutes();

  var currentTime = `${date}/${n}/${year} ${hours}:${minute} `;
  return currentTime;
}
class AddPresenter extends Component {
  state = {
    name: '',
    age: '',
    evaluatorName:'',
    presentationTopic:'',
    article:'',
    monitor:'',
    currentTime:displayDateTime(),
    cancel:''
  }
  handleChange = (e) => {
      this.setState({
          [e.target.name]:e.target.value
      })
  }
  
  handleSubmit = (e) => {
      e.preventDefault();
     console.log (this.state);
axios
  .post ('/presenters', this.state)
  .then (response => {
    console.log (response);
  })
  .catch (err => console.log (err));

 
  }

  render () {
    return (
      <div className="container addPresentation">
        <Form onSubmit={this.handleSubmit} method="POST">

          <FormGroup>
            <Label>Presenter Name:</Label>{' '}
            <Input
              className="custom-input"
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              placeholder="Presenter Name"
            />

          </FormGroup>
         
          <FormGroup>
            <Label>Evaluator Name</Label>{' '}
            <Input
              type="text"
              name="evaluatorName"
              value={this.state.evaluatorName}
              onChange={this.handleChange}
              placeholder="Evaluator Name"
            />
          </FormGroup>
          <FormGroup>
            <Label>Presentation Topic</Label>
            <Input
              type="text"
              name="presentationTopic"
              value={this.state.presentationTopic}
              onChange={this.handleChange}
              placeholder="Presentation Topic"
            />
          </FormGroup>
          <FormGroup>
            <Label>Article</Label>
            <Input
              type="text"
              name="article"
              value={this.state.article}
              onChange={this.handleChange}
              placeholder="Article"
            />
          </FormGroup>
          <FormGroup>
            <Label>ID</Label>
            <Input
              type="text"
              name="id"
              value={this.props.id}
              onChange={this.handleChange}
              placeholder="ID"
            />
          </FormGroup>
          <FormGroup>
            <Label>Current Time</Label>
            <Input
              type="text"
              name="currentTime"
              value={this.state.currentTime}
              onChange={this.handleChange}
              placeholder="currentTime"
            />
          </FormGroup>
          <div>
            <Button color="primary" >
              Add Presenters
            </Button>
          </div>
        </Form>
      </div>
    );
  }
}

export default AddPresenter;
