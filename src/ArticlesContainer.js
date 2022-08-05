import './ArticlesContainer.css'
import { Link } from 'react-router-dom'

const ArticlesContainer = ({ data }) => {
    const articles = data.map(article => {
        if (article.title && article.abstract && article.multimedia) {
            return <div className='indiv-article' key={data.indexOf(article)}>
               <img className='article-img-preview' src={ article.multimedia[0].url } alt='article image'/> 
                <h1 className='article-home-title'>{ article.title }</h1>
                <Link to={`article/${data.indexOf(article)}`}>
                <button className='see-more-btn' id={data.indexOf(article)}>
                <span className='see-more'>see more</span>
                </button> 
                </Link>
            </div>
        } 
    })

    return (
        <div className='all-article'>
            { articles.length ? articles : <h1>Sorry, there are no current results.</h1> }
        </div>
    )
}

export default ArticlesContainer;