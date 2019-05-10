import React, {Component} from 'react';

//用keys提取组件
//元素的key只有放在循环数组中才有意义
//key要保持唯一性
class List extends Component {
    constructor(props){
        super(props);
        this.state = {
            list :['1','2','3','4','5'],
        }
    }
    getDataList(){
        let listDom;
        listDom = this.state.list.map((val)=>{
            return (<li key={val.toString()}>{val}</li>)
        })
        return listDom;
    }
    render(){
        return (
            <div>{this.getDataList()}</div>
        )
    }
}

export default List;