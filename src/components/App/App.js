import './App.css';
import entertainment from '../../data/entertainment';
import health from '../../data/health';
import local from '../../data/local';
import Menu from '../Menu/Menu';
import NewsContainer from '../NewsContainer/NewsContainer';
import React, { Component } from 'react';
import science from '../../data/science';
import SearchForm from '../SearchForm/SearchForm';
import technology from '../../data/technology';

class App extends Component {
  constructor() {
    super();
    this.state = {
      topics: {
        local, 
        entertainment, 
        health, 
        science, 
        technology
      },
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
      errorMessage = <h2>No articles match your search.</h2>
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
