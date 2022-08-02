import React, { useState } from 'react';
import ArticleDetails from './ArticleDetails';
import './ArticlesContainer.css'

const ArticlesContainer = ({ data }) => {
    console.log(data)
    const articles = data.map(article => {
        return <div className='article'>
            <h3>{article.title}</h3>
            <p>{article.abstract}</p>
        </div>
    })
    return (
        <div>
            { articles }
        </div>
    )
}

export default ArticlesContainer;