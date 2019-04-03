import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import dataList from '../api/list.js'

class one extends Component {
    constructor(props){
        super(props);
        this.static = {};
        this.dataList = dataList;
        console.log(this.dataList)
        console.log(this.static)
    }
    getDataList(){
        let List;
        List = this.dataList.map((item)=>(
            <li key={item.name} onClick={()=>{this.props.history.replace("/render")}}>{item.name}</li>
        ))
        return List;
    }
    render(){
        return (
            <div>One
                <Link to={'/two'}> link to two</Link>
                <p onClick={()=> this.props.history.replace('/two')}> click </p>
                <h2>{this.props.tiger}</h2>
                <button onClick={this.props.PayIncrease}>+</button>
                <button onClick={this.props.PayDecrease}>-</button>
                <ul>
                    {this.getDataList()}
                </ul>
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