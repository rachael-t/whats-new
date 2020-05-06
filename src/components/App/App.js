import React, { Component } from 'react';
import local from '../../data/local';
import entertainment from '../../data/entertainment';
import health from '../../data/health';
import science from '../../data/science';
import technology from '../../data/technology';
import './App.css';
import NewsContainer from '../NewsContainer/NewsContainer';
import Menu from '../Menu/Menu';

class App extends Component {
  constructor() {
    super();
    this.state = {
      topics: {local, entertainment, health, science, technology},
      selected: local
    }
  }

  changeSelectedNews = (selectedTopic) => {
    console.log(selectedTopic)
    this.setState({selected: this.state.topics[selectedTopic]})
  }

  render () {
    return (
      <div className="app">
        <Menu changeSelectedNews={this.changeSelectedNews}/>
        <NewsContainer selectedNews={this.state.selected} />
      </div>
    );
  }
}

export default App;
