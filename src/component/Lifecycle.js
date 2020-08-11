import React, { Component } from 'react';

class Lifecycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "Lfc"
    }
  }

  componentDidMount () {
    console.log("componentDidMount");
  }

  static getDerivedStateFromProps (props, state) {
    console.log("getDerivedStateFromProps",props, state);
    return {
      data: "new State"
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate",nextProps, nextState);
    if(nextProps.myProps === 2)
      return false
    return true;
  }

  getSnapshotBeforeUpdate(prePops, preState) {
    console.log("getSnapshotBeforeUpdate",prePops, preState);
    return {
      snapContent: 1000
    };
  }

  componentDidUpdate (prePops, preState, snap) {
    console.log("componentDidUpdate",prePops, preState, snap);
  }

  render() {
    return (
      <div>
        {this.state.data}
        My Props: {this.props.myProps}
      </div>
    );
  }
}

export default Lifecycle;