import React from 'react';

function User (props) {
  return <h2>User</h2>
}

function Guest (props) {
  return <h2>Guest</h2>
}

class LoginControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLogin: false
    }
  }

  handingClick = () => {
    this.setState({
      isLogin: !this.state.isLogin
    })
  }

  render() {
    return <>
      {this.state.isLogin ? <User/> : <Guest/>}
      <a href="#" onClick={this.handingClick}>Click here.!</a>
    </>;
  }
}

export default LoginControl ;