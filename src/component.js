import React, { Component } from 'react';

class Components extends Component {
    constructor(props){
        super(props);
        this.state = { isLogin:false}
    }
    componentDidMount(){

    }
    componentWillUnmount(){
        
    }
    stateChange(){
        this.setState({isLogin:!this.state.isLogin})
    }
    render(){
        const isLogin = this.state.isLogin;
        let res = null;
        if(isLogin){
            res = <h1>true</h1>;
        }else{
            res = <h1>false</h1>
        }
        let arr = [1,2,3,4];
        let arrList = arr.map((item)=><h1 key={item.toString()}>{item}</h1>)
        return (
            <div onClick = {this.stateChange.bind(this)}>{res} {arrList}</div>
        )
    }
}

export default  Components