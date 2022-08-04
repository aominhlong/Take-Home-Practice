import React, { useState } from 'react';
import './ArticleDetails.css'

const ArticleDetails = ({ specificArticle }) => {
    console.log('articledetails prop', specificArticle)

    const addUrl = (url) => {
        window.open(`${url}`)
    }

    const articleDate = specificArticle.published_date.split('T').splice(0,1)

    console.log(articleDate)

    return (
        <div>
            <h1>{ specificArticle.title }</h1>
            <img className='article-img' src={ specificArticle.multimedia[0].url}></img>
            <br></br>
            <p>{ specificArticle.abstract }</p>
            <p className='view-article-link'>View full article <span className='full-article' onClick={() => addUrl(specificArticle.url)}>here</span></p>
            <p>Published: { articleDate[0] }</p>
        </div>
    )
}

export default ArticleDetails;