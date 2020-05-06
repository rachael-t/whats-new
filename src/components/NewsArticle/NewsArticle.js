import React from 'react';
import './NewsArticle.css';
import PropTypes from 'prop-types';

const NewsArticle = (props) => {
    return (
        <article>
            <img src={props.image} alt=''/>
            <h3>{props.headline}</h3>
            <p>{props.description}</p>
            <a href={props.link}>Link to Article</a>
        </article>
    )
}

export default NewsArticle;

NewsArticle.propTypes = {
    image: PropTypes.string,
    headline: PropTypes.string,
    description: PropTypes.string,
    link: PropTypes.string,
}