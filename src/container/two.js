import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class Two extends Component{
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
            <div>two
                <Link to={'/one'}> link to one</Link>
            </div>
        )
    }
}

export default Two;