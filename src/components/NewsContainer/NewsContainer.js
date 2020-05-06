import React from 'react';
import './NewsContainer.css';
import NewsArticle from '../NewsArticle/NewsArticle';
import PropTypes from 'prop-types';

const NewsContainer = (props) => {
    const newsArticlesToRender = props.selectedNews.map(newsArticle => {
        return (
           <NewsArticle 
                key={newsArticle.id}
                image={newsArticle.img}
                headline={newsArticle.headline}
                description={newsArticle.description}
                link={newsArticle.url}
           />
        )
    })
    return (
        <section className="news-container">
            {newsArticlesToRender}
        </section>
    )
}

export default NewsContainer;

NewsContainer.propTypes = {
    selectedNews: PropTypes.array,
}