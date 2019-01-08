import React, { Component } from 'react'
import axios from 'axios'
import Presenter from './Presenter';
import PresenterDetail from './PresenterDetail'
import { Table } from 'reactstrap';
class Presenters extends Component {
   
renderPresenters = () => {
    console.log("presenters",this.props)
    let presenters = this.props.presenters;
    return presenters.map((presenter) => {
        return <Presenter key={presenter._id} presenter = {presenter}/>
    })
}

 render() {  
    return (
      <div>
          <p>{this.props.presenters.length}</p>
        <div className="container">
        <h2>Presenters Content</h2>
        <Table dark>
          <thead>
            <tr>
              <th>Presenter Name</th>
              <th>Evaluator Name </th>
              <th>Presentation Topic</th>
              <th>Article</th>
              <th>ID</th>
              <th>Current Time</th>
              <th>Monitor</th>
            </tr>
          </thead>
        </Table>
      </div>
        
       {this.renderPresenters()}
      </div>
    )
  }
}

export default Presenters
