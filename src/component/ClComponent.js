import React, { Component } from 'react';

class ClComponent extends Component {
  constructor(props) {
    super(props);
    console.log("props", props);
  }

  render() {
    return (
      <div>
        <h3>{this.props.name}</h3>
      </div>
    );
  }
}

export default ClComponent;