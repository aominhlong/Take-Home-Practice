import React, { useState } from 'react';
import ArticleDetails from './ArticleDetails';
import './ArticlesContainer.css'
import { Link } from 'react-router-dom'

const ArticlesContainer = ({ data }) => {
    const articles = data.map(article => {
        if (article.title && article.abstract && article.multimedia) {
            return <div className='indiv-article' key={data.indexOf(article)}>
               <img className='article-img-preview' src={ article.multimedia[0].url } /> 
                <h3>{article.title}</h3>
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