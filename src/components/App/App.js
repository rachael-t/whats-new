import React, { Component } from 'react';
import local from '../../data/local';
import entertainment from '../../data/entertainment';
import health from '../../data/health';
import science from '../../data/science';
import technology from '../../data/technology';
import './App.css';
import NewsContainer from '../NewsContainer/NewsContainer';
import Menu from '../Menu/Menu';
import SearchForm from '../SearchForm/SearchForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      topics: {local, entertainment, health, science, technology},
      selected: local
    }
  }

  changeSelectedNews = (e) => {
    this.setState({selected: this.state.topics[e.target.name]})
  }

  displayFilteredNews = (input) => {
    const filteredNews = this.state.selected.filter(article => article.headline.toLowerCase().includes(input));
    this.setState({selected: filteredNews});
  }

  render () {
    let errorMessage = '';
    if(!this.state.selected.length) {
      errorMessage = <h3>No articles match your search.</h3>
    }
    return (
      <div className="app">
        <SearchForm displayFilteredNews={this.displayFilteredNews}/>
        <Menu changeSelectedNews={this.changeSelectedNews}/>
        <NewsContainer selectedNews={this.state.selected} />
        {errorMessage}
      </div>
    );
  }
}

export default App;
