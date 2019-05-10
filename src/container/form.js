import React, {Component} from 'react';

//表单
//受控组件
//在react中form表单的元素的状态只可以用setState进行更新
//我们通过react变成一种单一数据源状态来结合二者，react负责渲染表单的组件仍然控制用户后续输入时所发生的变化,相应的，其值由react控制的输入表单元元素称为"受控组件"
//textarea/select 同 input value进行绑定dom元素的值，onChange用于监听数据的变化,可使用通用的方法来处理  checkbox和radio为checked赋值 同原生写法
class forms extends Component {
    constructor(props){
        super(props);
        this.state = {
            inputValue:'123',
        }
    }
    inputChange(val,key){
        this.setState({
            [key]:val,
        })
    }
    render(){
        return (
            <div>
                <input value={this.state.inputValue} onChange={(event)=>{this.inputChange(event.target.value,'inputValue')}}/>失去焦点++;
                <button>+</button>

            </div>
        )
    }
}

export default forms;