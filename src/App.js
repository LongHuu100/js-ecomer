import React, { Component } from 'react';
import Menu from './component/demo/Menu';
import Content from './component/demo/Content';
import Footer from './component/demo/Footer';
import Form from './component/Form';
import SelectForm from './component/SelectForm';
import Calculator from './component/Calculator';
import Lifecycle from './component/Lifecycle';

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      data:'T3h',
      arrMenu: ['Home', 'Dich vụ', 'Liên hệ'],
      propsChange: 0
    }
  }
  changeState = () =>{
    this.setState({
      data:'State da thay doi',
      propsChange: this.state.propsChange + 1
    })
  }
  render() {

    return (
      <div>
        <Menu 
          arrMenu={this.state.arrMenu}
          subMenu = "Hello" />
        <Content />
        <Lifecycle myProps={this.state.propsChange} />
        {this.state.data}
        <button onClick = {() =>this.changeState()} >Click</button>
        <Footer />
      </div>
    );
  }
}

export default App;