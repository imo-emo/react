import React, {Component} from 'react';


//状态提升
//react中状态分享是通过state数据提升至离这些数据的组件最近的父组件来完成的，这就是所谓的状态提升
class stateAscensionChild extends Component {
    constructor(props){
        super(props);
        this.state = {
            dom:'',
        };
    }
    componentWillMount(){
        
    }
    render(){
        return (
            <div>
                <p>{this.props.second>50?'大于50':'小于50'}</p>
            </div>
        )
    }
}

export default stateAscensionChild;