import React, {Component} from 'react';

//条件渲染
//在react中的条件渲染与js中的一致,使用if/条件运算符来实现
//可是使用元素变量来实现(变量也可以用来声明组件)
//运算符&&
//三木运算符
//阻止组件渲染  可以借助穿参的方式来用变量实现组件的阻止渲染
class ifRende extends Component{
    constructor(props){
        super(props);
        this.state = {
            tabDom :(<div>false</div>),
            tab :0,
        }
    }
    tabChange(){
        this.setState((prevState)=>({
            tab: Number(!prevState.tab)
        }))
        // let tabDom;
        // if(!this.state.tab){
        //     tabDom = (<div>true</div>)
        // }else{
        //     tabDom = (<div>false</div>)
        // }
        // this.setState({
        //     tabDom,
        // })
    }
    render(){
        return (
            <div>
                <p>{this.state.tab}</p>
                {Boolean(this.state.tab) && this.state.tabDom}
                {Boolean(this.state.tab)?0:1}
                <button onClick={()=>{this.tabChange()}}>tab Change</button>
            </div>
        )
    }
}

export default ifRende;