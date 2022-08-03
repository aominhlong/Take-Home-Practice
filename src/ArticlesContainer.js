import React, { useState } from 'react';
import ArticleDetails from './ArticleDetails';
import './ArticlesContainer.css'
import { Link } from 'react-router-dom'

const ArticlesContainer = ({ data }) => {
    const articles = data.map(article => {
        if (article.title && article.abstract) {
            return <div className='indiv-article' key={data.indexOf(article)}>
                <h3>{article.title}</h3>
                <p>{article.abstract}</p>
                <Link to={`article/${data.indexOf(article)}`} 
                className='link-to-article' 
                id={data.indexOf(article)}
                >see more</Link>
            </div>
        }
    })
    return (
        <div className='all-article'>
            { articles }
        </div>
    )
}

export default ArticlesContainer;