import React, { Component } from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import dataList from './api/list.js'

class App extends Component {
    constructor(props){
       super(props);
       console.log(props);
       this.static = {};
       this.dataList = dataList;
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
    routerReplace(url){
        console.log(url);
        console.log(this.props);
    }
    getDataList(){
        let List;
        List = this.dataList.map((item)=>(
            <li key={item.name}><Link to={item.url}>{item.name}</Link></li>
        ))
        return List;
    }
    render() {
        return (
            <div className="container">
                <ul>
                    {this.getDataList()}
                </ul>
                {this.props.children}
            </div>
        );
    }
}

export default App;
