import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

class one extends Component {
    constructor(props){
        super(props);
        this.static = {};
    }
    componentWillMount(){

    }
    componentWillUnmount(){

    }
    componentWillReceiveProps(){

    }
    componentWillUpdate(){

    }
    componentDidUpdate(){

    }
    render(){
        return (
            <div>One
                <Link to={'/two'}> link to two</Link>
                <p onClick={()=> this.props.history.replace('/two')}> click </p>
                <h2>{this.props.tiger}</h2>
                <button onClick={this.props.PayIncrease}>+</button>
                <button onClick={this.props.PayDecrease}>-</button>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        tiger:state
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        PayIncrease: () => dispatch({type:'涨工资'}),
        PayDecrease: () => dispatch({type:'扣工资'}),
    }
}

one = connect(mapStateToProps, mapDispatchToProps)(one);

export default one;