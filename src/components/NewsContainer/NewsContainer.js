import React from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle'

const NewsContainer = (props) => {
    const newsArticlesToRender = props.selectedNews.map(newsArticle => {
        return (
           <NewsArticle 
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