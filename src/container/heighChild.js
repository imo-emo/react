import React, {Component} from 'react';
import Height from './components/heighComponent';

class HeighChild extends Component {
    render () {
        console.log(this.props)
        return (
            <div onClick={() => { this.props.handleClick() }}>高阶组件</div>
        )
    }
}

export default Height(HeighChild);