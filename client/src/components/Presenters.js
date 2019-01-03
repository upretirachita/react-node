import React, { Component } from 'react'
import axios from 'axios'
import Presenter from './Presenter';
class Presenters extends Component {
    state = {
        presenters:[]
    }
    componentDidMount () {
        axios.get('/presenters').then((response) => {
            console.log(response);
            this.setState({
                presenters:response.data
            })
        })
    }
renderStudents = () => {
    let presenters = this.state.presenters;
    return presenters.map((presenter) => {
        return <Presenter key={presenter._id} presenter = {presenter}/>
    })
}

  render() {
      
    return (
      <div>
          <p>{this.state.presenters.length}</p>
        <div className="container">
        <h2>Presenters Detail</h2>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Presenter Name</th>
              <th>Evaluator Name </th>
              <th>Presentation Topic</th>
              <th>Article</th>
              <th>ID</th>
              <th>Current Time</th>
            </tr>
          </thead>
        </table>
      </div>
        
       {this.renderStudents()}

      </div>
    )
  }
}

export default Presenters
