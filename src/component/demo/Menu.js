import React from 'react';

class Menu extends React.Component{
  constructor(props){
    console.log("props", props);
    super(props)
    this.state = {
      a: "hello"
    }
  }
  
  render(){
      return(
          <ul>
            { this.props.arrMenu && 
              this.props.arrMenu.map( (item, id) => {
                return <li key={id}>{item}</li>
              })
            }
        </ul>
      )
  }
}


// function Menu(props) {
//   return (
//     <div>
//       <ul>
//         <li>{this.state.a}</li>
//         <li>{this.state.a}</li>
//         <li>{this.state.a}</li>
//         <li>{this.state.a}</li>
//       </ul>
//     </div>
//   );
// }

export default Menu;