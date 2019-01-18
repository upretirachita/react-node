import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const EditPresentation = props => {
  console.log("hear is propsfrom Editpresentation",props)
  console.log("EditedName",props.name)
  console.log("Editpresentation ID",props._id)
  let post = props.presenters.find(post => {
    return post._id === props.match.params._id ;
  });
  console.log("Editedpropsname",post.name)
  console.log("EditedPresentationID",post._id)
  return (
    <div className="container test">
      <div>
      <div className="container addPresentation">
        <Form onSubmit={props.handleSubmit} method="POST">
          <FormGroup>
            <Label>Presenter Name:</Label>{" "}
            <Input
              className="custom-input"
              type="text"
              name="name"
              value={post.name}
              onChange={props.handleChange}
              placeholder="Presenter Name"
            />
          </FormGroup>

          <FormGroup>
            <Label>Evaluator Name</Label>{" "}
            <Input
              type="text"
              name="evaluatorName"
              value={post.evaluatorName}
              onChange={props.handleChange}
              placeholder="Evaluator Name"
            />
          </FormGroup>
          <FormGroup>
            <Label>Presentation Topic</Label>
            <Input
              type="text"
              name="presentationTopic"
              value={post.presentationTopic}
              onChange={props.handleChange}
              placeholder="Presentation Topic"
            />
          </FormGroup>
          <FormGroup>
            <Label>Article</Label>
            <Input
              type="text"
              name="article"
              value={post.article}
              onChange={props.handleChange}
              placeholder="Article"
            />
          </FormGroup>
          
          <FormGroup>
            <Label>Current Time</Label>
            <Input
              type="text"
              name="currentTime"
              value={post.currentTime}
              onChange={props.handleChange}
              placeholder="currentTime"
            />
          </FormGroup>
          <div>
          <div>
            <Button color="primary">Edit Presenters</Button>
          </div>
          </div>
        </Form>
      </div>
      
      </div>
    </div>
  );
};


export default EditPresentation;
