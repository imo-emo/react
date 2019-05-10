import React, {Component} from 'react';

class Child extends Component{
    render(){
        return (
            <div>{this.props.val}</div>
        )
    }
}

export default Child;