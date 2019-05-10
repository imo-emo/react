import React, { Component } from 'react';

let timer;

class rende extends Component{
    constructor(props){
        super(props)
        this.state = {
            element: (<p>Hello,world!</p>),
            date: new Date().toLocaleTimeString(),
        }
    }
    getDate(){
        timer = setInterval(()=>{
            this.setState({
                date: new Date().toLocaleTimeString(),
            })
        },1000)
    }
    componentWillMount(){
        this.getDate();
    }
    componentWillUnmount(){
        clearInterval(timer);
    }
    render(){
        return (
            <div>
                <p>元素渲染</p>
                {this.state.element}
                {this.state.date}
            </div>
        )
    }
}

export default rende;