import React, { Component } from 'react';

const ThemeContext = React.createContext('light');

class Contexts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'dark',
        }
    }
    render() {
        return (
            <div>
                <ThemeContext.Provider value={this.state.value}>
                    <ContextChild />
                </ThemeContext.Provider>
            </div>
        )
    }
}

class ContextChild extends Component {
    render() {
        return (
            <div>
                <ThemeContext.Consumer>
                    {
                        value => value
                    }
                </ThemeContext.Consumer>
            </div>
        )
    }
}

export default Contexts;

// context