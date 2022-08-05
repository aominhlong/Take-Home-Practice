import './ArticlesContainer.css'
import { Link } from 'react-router-dom'

const ArticlesContainer = ({ data }) => {

    const articles = data.map(article => {
        if (article.title && article.abstract && article.multimedia) {
            return <div className='indiv-article' key={data.indexOf(article)}>
               <img className='article-img-preview' src={ article.multimedia[0].url } alt='article image'/> 
                <h3 className='article-home-title'>{article.title}</h3>
                <Link to={`article/${data.indexOf(article)}`}>
                <button className={data.indexOf(article)} id={data.indexOf(article)}>
                see more
                </button> 
                </Link>
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