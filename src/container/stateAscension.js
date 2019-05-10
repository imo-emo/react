import React, {Component} from 'react';
import StateAscensionChild from './components/stateAscensionChild'

//状态提升
//react经常会遇到几个组件需要共同状态数据的情况，这种情况下，我们最好将这部分共享的状态提升至它们最近的父组件当中进行管理
class stateAscension extends Component {
    constructor(props){
        super(props);
        this.state = {
            second:0,
        };
    }
    componentWillMount(){
        let timer;
        timer = setInterval(()=>{
            this.secondAdd();
            if(this.state.second>100){
                clearInterval(timer);
            }
        },100)
    }
    secondAdd(){
        this.setState((prev)=>({
            second: prev.second+1,
        }))
    }
    cons(){  //调适
        console.log('emit');
    }
    render(){
        return (
            <div>
                {this.state.second}
                <StateAscensionChild  second={this.state.second}/>
                <button>reload</button>
            </div>
        )
    }
}

export default stateAscension;

//总结
//react，对应任何可变数据理应只有一个单一"数据源",通常,状态是首先添加在需要渲染数据的组件中,然后,如果另一个组件也需要这些数据,你可以将数据提升至理他们最近的共同祖先中。
