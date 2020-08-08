import React, { Component } from 'react';
import Menu from './component/demo/Menu';
import Content from './component/demo/Content';
import Footer from './component/demo/Footer';

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      data:'T3h'
    }
  }
  changeState = () =>{
    this.setState({
      data:'State da thay doi'
    })
  }
  render() {
    return (
      <div>
        <Menu />
        <Content />
        {this.state.data}
        <button onClick = {() =>this.changeState()} >Click</button>
        <Footer />
      </div>
    );
  }
}

export default App;