import React, { Component } from 'react';
import './Menu.css'

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: '',
        };
    };

    handleChange = (e) => {
        // this.setState({selected: e.target.name})
        let selectedTopic = e.target.name;
        this.props.changeSelectedNews(selectedTopic)
    }

    render() {
        return(
            <div className='menu-container'>
                <h1>What's New</h1>
                <nav>
                    <button onClick={this.handleChange} name='local'>Local</button>
                    <button onClick={this.handleChange} name='entertainment'>Entertainment</button>
                    <button onClick={this.handleChange} name='health'>Health</button>
                    <button onClick={this.handleChange} name='science'>Science</button>
                    <button onClick={this.handleChange} name='technology'>Technology</button>
                </nav>
            </div>
        )
    }
}

export default Menu;