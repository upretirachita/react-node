import React from "react";

import { Button, Form, FormGroup, Label, Input } from "reactstrap";


const AddPresenter = props => {
 
  console.log(props)
  console.log("props",props.name)

  return (
    <div className="container test">
     
      <div className="container addPresentation">
        <Form onSubmit={props.handleSubmit} method="POST">
          <FormGroup>
            <Label>Presenter Name:</Label>{" "}
            <Input
              className="custom-input"
              type="text"
              name="name"
              value={props.name}
              onChange={props.handleChange}
              placeholder="Presenter Name"
            />
            <p style={{ color: "red" }}>{props.errors.name}</p>
          </FormGroup>

          <FormGroup>
            <Label>Evaluator Name</Label>{" "}
            <Input
              type="text"
              name="evaluatorName"
              value={props.evaluatorName}
              onChange={props.handleChange}
              placeholder="Evaluator Name"
            />
            <p style={{ color: "red" }}>{props.errors.evaluatorName}</p>
          </FormGroup>
          <FormGroup>
            <Label>Presentation Topic</Label>
            <Input
              type="text"
              name="presentationTopic"
              value={props.presentationTopic}
              onChange={props.handleChange}
              placeholder="Presentation Topic"
            />
            <p style={{ color: "red" }}>{props.errors.presentationTopic}</p>
          </FormGroup>
          <FormGroup>
            <Label>Article</Label>
            <Input
              type="text"
              name="article"
              value={props.article}
              onChange={props.handleChange}
              placeholder="Article"
    
            />
            <p style={{ color: "red" }}>{props.errors.article}</p>
          </FormGroup>
         
          <FormGroup>
            <Label>Current Time</Label>
            <Input
              type="text"
              name="currentTime"
              value={props.currentTime}
              onChange={props.handleChange}
              placeholder="currentTime"
            />
          </FormGroup>
          
          <div>
            <Button color="primary">Add Presenters</Button>
          </div>
        </Form>
      </div>
      </div>
  );
};

export default AddPresenter;
