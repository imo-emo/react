import React, {Component} from 'react';

class Events extends Component {
    constructor(props){
        super(props);
        this.state = { isToggle: true };
        this.handleChange = this.handleChange.bind(this);
    }
    eventsChange(e){
        e.preventDefault();
        console.log("点击 a～")
    }
    handleChange(){
        this.setState(prev=>({
            isToggle: !prev.isToggle
        }))
    }
    render(){
        return (
            <div>
                <a href="..." onClick={this.eventsChange}>events</a>
                <button onClick={this.handleChange}>{ this.state.isToggle ? 'on' : 'off' }</button>
            </div>
        )
    }
}

export default Events;