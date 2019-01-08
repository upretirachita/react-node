import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Table } from 'reactstrap';


export class Presenter extends Component {
  render() {
      const {name,evaluatorName,presentationTopic,article,id,monitor,currentTime} = this.props.presenter;
    return (
      <div>
        
        <div className="container">
        <Table dark className="tableData" >
            <tr>
              <td>{name}</td>
              <td>{evaluatorName}</td>
              <td>{presentationTopic}</td>
              <td>{article}</td>
              <td>{id}</td>
              <td>{currentTime}</td>
              <td><Link to={`/presenter/${id}`}>View </Link>Edit Delete{monitor}</td>  
            </tr>
        </Table>
      </div>
      </div>
      
    )
  }
}

export default Presenter
