import React, { Component } from "react";
import Avatar from 'react-avatar';



class Test extends Component {
 

  render() {
  
    return (
      <div className="container addPresentation">
            <Avatar name="Foo Bar" round={true}  />
            <Avatar googleId="5995016327407081378" size="100" round={true} />

      </div>
    );
  }
}

export default Test;
