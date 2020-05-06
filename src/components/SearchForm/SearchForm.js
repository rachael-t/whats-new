import React, { Component } from 'react';
import './SearchForm.css';
import PropTypes from 'prop-types';

class SearchForm extends Component {
    constructor() {
        super();
        this.state = {
            userSearch: ''
        }
    }

    handleInput = (e) => {
        this.setState({userSearch: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const input = this.state.userSearch.toLowerCase();
        this.props.displayFilteredNews(input);
        this.setState({userSearch: ''});
    }

    render () {
        return (
            <form>
                <input 
                    value={this.state.userSearch}
                    type="search" 
                    placeholder="Search news articles"
                    onChange={this.handleInput}
                />
                <button 
                    className="search-btn"
                    onClick={this.handleSubmit}
                >
                Search
                </button>
            </form>
        )
    }
}

export default SearchForm;

SearchForm.propTypes = {
    displayFilteredNews: PropTypes.func,
}