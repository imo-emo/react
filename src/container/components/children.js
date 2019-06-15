import React, {Component} from 'react';

class Child extends Component{
    constructor (props) {
        super(props);
        this.state = {
            inputValue: '123123'
        }
    }
    // 通过 props 获取派生状态并强制赋值 - 相对于子元素来说是非受控组件;
    static getDerivedStateFromProps (nextProps) {
        // console.log(nextProps);
        return {
            inputValue: nextProps.inputValue
        }
    }
    render(){
        return (
            <div>{this.props.val}
                <input value={this.state.inputValue} readOnly />
            </div>
        )
    }
}

export default Child;