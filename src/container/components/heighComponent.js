import React, { Component } from 'react';

const Height = Child => {
    return class extends Component { // 如果想获取到props，可以使用反向继承,这样的话可以控制参数的渲染
        constructor () { // 继承不到props
            super();
            this.state = {
                fields: {},
            }
        }
        handleClick = () => {
            alert(1)
        }
        render () {
            return (
                <Child handleClick={this.handleClick} { ...this.state } />
            )
        }
    }
}

export default Height;