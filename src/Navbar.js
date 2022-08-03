import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({ searchArticles, setFilteredData, text, setText }) => {
    // const [text, setText] = useState('')

    return (
        <div className='navbar'>
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