import React, { Component } from 'react'

import { Link } from "react-router-dom";
import { Table } from 'reactstrap';
export class Presenter extends Component {
 
  render() {
      const {name,evaluatorName,presentationTopic,article,id,currentTime} = this.props.presenter;
    return (
      <div>
        
        <div className="container">
        <Table dark className="tableData" >
         
          <Link to={`/presenter/${id}`}>
            <tr>
              <td>{name}</td>
              <td>{evaluatorName}</td>
              <td>{presentationTopic}</td>
              <td>{article}</td>
              <td>{id}</td>
              <td>{currentTime}</td>
            </tr>
            </Link>
         
        </Table>
      </div>
      </div>
      
    )
  }
}

export default Presenter
