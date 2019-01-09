import React, { Component } from 'react'
import {Card, 
   CardBody,
   Button } from 'reactstrap';

const  PresenterDetail = props => {
  let post = props.presenters.find(post => {
    return post._id === props.match.params._id && post;
  });
  console.log("postid",post._id)

 const deleteOneNode = () => {
   props.deletePresenter(post._id);
    props.history.push("/presenters");
  };

  return (
    <div className="container">
    <div>
      <Card>
        <CardBody>
          <h3>Presenter Detail</h3>
          <h5> Presenter Name:{post.name}</h5>
          <h5>Evaluator Name:{post.evaluatorName}</h5>
          <h5>Presentation Topic:{post.presentationTopic}</h5>
          <h5>Article:{post.article}</h5>
          <h5>Date{post.currentTime}</h5>
        <Button>Edit</Button>{' '}
        {' '}<Button onClick={deleteOneNode}>Delete</Button>
        </CardBody>
      </Card>
    </div>
  </div>
  
  ) 
};

export default  PresenterDetail;