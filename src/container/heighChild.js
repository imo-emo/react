import React, {Component} from 'react';
import Height from './components/heighComponent';

class HeighChild extends Component {
    render () {
        console.log(this.props)
        return (
            <div>高阶组件</div>
        )
    }
}

export default Height(HeighChild);