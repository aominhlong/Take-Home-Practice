import './App.css';
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import ArticlesContainer from './ArticlesContainer';

const App = () => {

  const [allData, setAllData] = useState([])
  const [filteredData, setFilteredData] = useState({})
  const [genre, setGenre] = useState('world')

  useEffect(() => {
      fetch(`https://api.nytimes.com/svc/topstories/v2/${genre}.json?api-key=zFAFLWv8eNjlWC8oPAFmHbme0aAvA6RZ`)
      .then(res => res.json())
      .then(data => {
        setAllData(data.results)
      })
  }, [])

  console.log('hi', allData)
  console.log(genre)
  return (
    <div className="App">
      <h1 className='title'>NY Times Top Stories</h1>
      <Navbar />
      <h2>Currently looking at: {genre.charAt(0).toUpperCase()+ genre.slice(1)} News</h2>
      <ArticlesContainer data={ allData } />
    </div>
  );
}

export default App;
