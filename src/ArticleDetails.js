import React, { useState } from 'react';
import './ArticleDetails.css'

const ArticleDetails = ({ specificArticle }) => {
    console.log('articledetails prop', specificArticle)

    const addUrl = (url) => {
        window.open(`${url}`)
    }

    return (
        <div>
            <h1>{ specificArticle.title }</h1>
            <img src={ specificArticle.multimedia[0] }></img>
            <p>{ specificArticle.abstract }</p>
            <p>View full article <span className='full-article' onClick={() => addUrl(specificArticle.url)}>here</span></p>
            <p>{ specificArticle.published_date }</p>
        </div>
    )
}

export default ArticleDetails;