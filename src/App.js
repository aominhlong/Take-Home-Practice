import './App.css';
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import ArticlesContainer from './ArticlesContainer';
import { Route, Link, Redirect } from 'react-router-dom'
import ArticleDetails from './ArticleDetails';

const App = () => {

  const [allData, setAllData] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [text, setText] = useState('')

  useEffect(() => {
      fetch(`https://api.nytimes.com/svc/topstories/v2/world.json?api-key=zFAFLWv8eNjlWC8oPAFmHbme0aAvA6RZ`)
      .then(res => res.json())
      .then(data => {
        setAllData(data.results)
        setFilteredData(data.results)
      })
  }, [])

  const searchArticles = (keyword) => {
    const filteredList = allData.filter(data => {
      return data.title.toUpperCase().includes(keyword.toUpperCase())
    })
    setFilteredData(filteredList)
  }

  return (
    <div className="App">
      <Link to='/'>
        <h1 className='title'>NY Times World Top Stories</h1>
      </Link>
      <Navbar searchArticles={ searchArticles } text={text} setText={setText}/>
      <Route exact path="/" render={() => 
        !text.length ? <ArticlesContainer data={ allData } /> : <ArticlesContainer data={ filteredData } />
      } />
      <Route exact path="/article/:id" render={({ match }) => {
        const specificArticle = allData[match.params.id]
        return <ArticleDetails specificArticle={ specificArticle }/>
        }
      } />
      <Redirect to='/'>
      </Redirect>
    </div>
  );
}

export default App;
