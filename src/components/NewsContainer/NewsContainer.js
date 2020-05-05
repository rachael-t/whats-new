import React from 'react';
import './NewsContainer.css'

const NewsContainer = ({ selectedNews }) => {
    const newsArticlesToRender = selectedNews.map(newsArticle => {
        return (
            <article>
                <img src={newsArticle.img} alt=''/>
                <h3>{newsArticle.headline}</h3>
                <p>{newsArticle.description}</p>
                <a href={newsArticle.url}>Link to Article</a>
            </article>
        )
    })
    return (
        <section>
            {newsArticlesToRender}
        </section>
    )
}

export default NewsContainer;