import React, { Component } from 'react';
import Child from './children'

//高阶组件
//高阶组件是react中的高级技术，用来重用组件逻辑，但是高阶组件本身并不是react api，他只是一种模式，这种模式是由react自身的组合性质必然产生的
//具体而言，高阶组件就是一个函数，且改函数接受一个组件作为参数，返回一个新的组件.
//const EnhancedComponent = higherOrderComponent(WrappedComponent);
//对比组件将props属性转变为ui,高阶组件则是将一个组件转换为另一个组件;
//高阶组件在react第三方库中很常见，比如 redux 的connect 方法和relay的createContainer
//使用高阶组件解决横切关注点
//注意：我们曾经介绍了混入mixins技术来解决横切点，现在我们意识到混入mixins技术产生的问题要比带来的价值大，介绍了为什么要移除混入技术及如何转换已经使用mixin的组件
//
class Parents extends Component{
    constructor(props){
        super(props);
        this.state = {
            Pv: '123',
        }
        this.PvChange = this.PvChange.bind(this);
    }
    PvChange(event){
        this.setState({
            Pv: event.target.value,
        })
    }
    render(){
        return (
            <div>component
                <input value={this.state.Pv} onChange={this.PvChange} />
                <Child val={this.state.Pv}></Child>
                <Child val={this.state.Pv.split("").reverse().join('')}></Child>
            </div>
        )
    }
}

export default Parents;