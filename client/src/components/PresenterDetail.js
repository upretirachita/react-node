import React, { Component } from "react";
import { Card, CardBody, Button,Input } from "reactstrap";
import EditPresentation from "./EditPresentation";
import { Link } from "react-router-dom";

const PresenterDetail = props => {
  let post = props.presenters.find(post => {
    return post._id === props.match.params._id ;
  });
  //console.log("postid", post._id);
  //console.log("edited",props.isInEditMode)

  /*
  const editOneNode = () => {
    console.log("Name", post.name);
    const res = post.name.replace(post.name, "Nabin");
    console.log("newname", res);
  };
*/
console.log("IDPresenterDETAIL",post._id)
  const deleteOneNode = () => {
    props.deletePresenter(post._id);
    props.history.push("/presenters");
    alert("Are you sure you want to delete!");
  };
  
  const RenderDefaultView = () => {
    return (
      <div onDoubleClick={props.handelEditMode}>
        <CardBody>
          <h3>Presenter Detail</h3>
          <h5> Presenter Name:{post.name}</h5>
          <h5>Evaluator Name:{post.evaluatorName}</h5>
          <h5>Presentation Topic:{post.presentationTopic}</h5>
          <h5>Article:{post.article}</h5>
          <h5>Date{post.currentTime}</h5>
          <Link to={`/presenters/edit/${post._id}`}>
          <Button >Edit</Button>{" "}</Link>
          <Button onClick={deleteOneNode}>Delete</Button>
        </CardBody>
      </div>
    );
  };

  return (
    <div className="container test">
      <div>
        <Card>
          <CardBody> 
          <RenderDefaultView />
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default PresenterDetail;
