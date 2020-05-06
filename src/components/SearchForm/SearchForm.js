import React, { Component } from 'react';
import './SearchForm.css';
// import PropTypes from 'prop-types';

class SearchForm extends Component {
    constructor() {
        super();
        this.state = {
            userSearch: ''
        }
    }

    render () {
        return (
            <div>
                <input type="search" placeholder="Search news articles"></input>
                <button className="search-btn">Search</button>
            </div>
        )
    }
}

export default SearchForm;

// SearchForm.propTypes = {

// }