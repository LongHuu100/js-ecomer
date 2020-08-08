import React, { Component } from 'react';

class ListAndKey extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers: [1,2,3,4,5,6,7,8,9]
    }
  }

  render() {
    return (
      <ul>
        { this.state.numbers.map( (item,id) => {
          return <li key={id} >{item}</li>
        })}
      </ul>
    );
  }
}

export default ListAndKey;