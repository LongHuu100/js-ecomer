import React from 'react';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
      clickOnTg: "ClickOnTg"
    };
  }

  handleClick = (id, e) =>{
    this.setState({
      isToggleOn: !this.state.isToggleOn,
      clickOnTg: "None"
    })
    console.log(id, e);
    // this.setState(state => ({
    //   isToggleOn: !state.isToggleOn
    // }));
  }

  render() {
    console.log("State Of Toggle" ,this.state);
    return (
      <button onClick={(e) => this.handleClick(100, e)}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

export default Toggle;