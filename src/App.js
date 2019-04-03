import React, { Component } from 'react';
import './App.css';
import {Link} from 'react-router-dom';

class App extends Component {
    constructor(props){
       super(props);
       console.log(props);
       this.static = {
          name:props.name,
       }
    }
    componentWillMount(){  //周期初始化调用
       console.log('created open');
    }
    componentWillUnmount(){  //周期结束调用
       console.log("close")
    }
    componentWillReceiveProps(props){  //接收到新的props调用
        console.log(props);
    }
    componentWillUpdata(){  //在接受static ／ props改变的时候调用

    }
    componentDidUpdate(){  //在接受static ／ props改变之后进行调用

    }
    render() {
        return (
            <div className="container">
                {this.props.children}
            </div>
        );
    }
}

export default App;
