import React, { useState } from 'react';
import './ArticleDetails.css'

const ArticleDetails = ({ specificArticle }) => {

    const addUrl = (url) => {
        window.open(`${url}`)
    }

    const articleDate = specificArticle.published_date.split('T').splice(0,1)

    return (
        <div className='article-detail-container'>
            <h1>{ specificArticle.title }</h1>
            <img className='article-img' src={ specificArticle.multimedia[0].url }></img>
            <br></br>
            <p className='article-detail'>{ specificArticle.abstract }</p>
            <p className='article-detail'>Published: { articleDate[0] }</p>
            <h4 className='view-article-link'>View full article <span className='full-article' onClick={() => addUrl(specificArticle.url)}>here</span></h4>
        </div>
    )
}

export default ArticleDetails;