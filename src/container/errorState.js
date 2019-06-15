import React, { Component } from 'react';

class errorState extends Component {
    constructor (props) {
        super(props);
        this.state = {

        }
    }
    static getDerivedStateFromError (error) {
        console.log(error); // 用于页面渲染 return
    }
    componentDidCatch () {
        // Log
    }
    render () {
        return (
            <div></div>
        )
    }
}

export default errorState;