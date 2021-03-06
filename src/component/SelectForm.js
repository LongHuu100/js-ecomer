import React from 'react';

class SelectForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'mango'};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
          Pick your favorite flavor 2:
          <select>
            <option value="grapefruit2">Grapefruit</option>
            <option value="lime2">Lime</option>
            <option value="coconut2">Coconut</option>
            <option value="mango2">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default SelectForm;