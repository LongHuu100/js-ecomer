import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    console.log("target", target);

    const value = target.name === 'isGoing' ? target.checked : target.value;
    const name = target.name;
    console.log(name, value);

    this.setState({
      [name]: value
    });
  }

  render() {
    console.log("this.state", this.state);
    return (
      <form>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          name:
          <input
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests2"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
      </form>
    );
  }
}

export default Form;