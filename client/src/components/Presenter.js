import React, { Component } from 'react'
import { Link } from "react-router-dom";

export class Presenter extends Component {
 
  render() {
      const {name,evaluatorName,presentationTopic,article,id,currentTime} = this.props.presenter;
    return (
      <div>
        
          <div className="container">
        <table className="table table-bordered" >
          <tbody>
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
          </tbody>
        </table>
      </div>
      </div>
      
    )
  }
}

export default Presenter
