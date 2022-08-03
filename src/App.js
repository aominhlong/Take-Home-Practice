import './App.css';
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import ArticlesContainer from './ArticlesContainer';
import { Route } from 'react-router-dom'

const App = () => {

  const [allData, setAllData] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [genre, setGenre] = useState('world')
  const [text, setText] = useState('')

  useEffect(() => {
      fetch(`https://api.nytimes.com/svc/topstories/v2/${genre}.json?api-key=zFAFLWv8eNjlWC8oPAFmHbme0aAvA6RZ`)
      .then(res => res.json())
      .then(data => {
        setAllData(data.results)
        setFilteredData(data.results)
      })
  }, [])

  const searchArticles = (keyword) => {
    console.log(filteredData.length)
    const filteredList = allData.filter(data => {
      return data.abstract.includes(keyword) 
    })
    setFilteredData(filteredList)
  }
  
  return (
    <div className="App">
      <h1 className='title'>NY Times Top Stories</h1>
      <Navbar setFilteredData={ setFilteredData } searchArticles={ searchArticles } text={text} setText={setText}/>
      <h2>Currently looking at: { genre.charAt(0).toUpperCase()+ genre.slice(1) } News</h2>
      <Route exact path="/" render={() => {
        <ArticlesContainer data={ allData } />
      }}></Route>
      { filteredData.length >= 1 && <ArticlesContainer data={ filteredData } /> }
    </div>
  );
}

export default App;
