import './App.css';
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import ArticlesContainer from './ArticlesContainer';

const App = () => {

  const [allData, setAllData] = useState([])
  const [filteredData, setFilteredData] = useState({})

  useEffect(() => {
      fetch('https://api.nytimes.com/svc/topstories/v2/us.json?api-key=zFAFLWv8eNjlWC8oPAFmHbme0aAvA6RZ')
      .then(res => res.json())
      .then(data => {
        setAllData(data)
      })
  }, [])

  console.log('hi', allData)
  return (
    <div className="App">
      <ArticlesContainer data={ allData } />
      
    </div>
  );
}

export default App;
