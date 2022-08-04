import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = ({ searchArticles, setFilteredData, text, setText }) => {
    // const [text, setText] = useState('')

    return (
        <div className='navbar'>
            <Link to='/'>
                <button className='home-btn'>Home</button>
            </Link>
            <input 
            value={ text }
            placeholder='search'
            onChange={(event) => {
                setText(event.target.value)
                searchArticles(text)
            }}
            >
            </input>
            <button className='clear-search' onClick={() => setText('')}>clear</button>
        </div>
    )
}

export default Navbar;