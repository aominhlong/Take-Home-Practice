import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [text, setText] = useState('')

    return (
        <div className='navbar'>
            <input 
            value={ text }
            placeholder='search'
            onChange={(event) => setText(event.target.value)}
            >
            
            </input>
        </div>
    )
}

export default Navbar;