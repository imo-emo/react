import React, { Component } from 'react';
import './App.css';
import  Components from './component.js'

class App extends Component {
//   constructor(props){
//       super(props);
//       this.state = {data: new Date()};
//   }
//   componentDidMount(){
//       // this.timer = setInterval(()=>{
//       //     this.tick();
//       // },500)
//   }
//   componentWillUnmount(){
//       //clearInterval(this.timer)
//   }
//   tick(){
//       this.setState((state)=>({
//           data:new Date()
//       }))
//   }
  render() {
    return (
      <Components/>
    );
  }
}

export default App;
