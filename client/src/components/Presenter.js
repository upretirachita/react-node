import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Table } from "reactstrap";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";

export class Presenter extends Component {
  render() {
    const {
      name,
      evaluatorName,
      presentationTopic,
      article,
      _id,
      monitor,
      currentTime
    } = this.props.presenter;
    return (
      <div>
        <div className="container">
          <Table dark className="tableData">
            <tr>
              <td>{name}</td>
              <td>{evaluatorName}</td>
              <td>{presentationTopic}</td>
              <td>{article}</td>
              <td>{_id}</td>
              <td>{currentTime}</td>
              <td>
                <Link to={`/presenter/${_id}`}>
                  <FaEye />{" "}
                </Link>
                <FaEdit />
                <FaTrash />
                {monitor}
              </td>
            </tr>
          </Table>
        </div>
      </div>
    );
  }
}

export default Presenter;
