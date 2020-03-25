import React from 'react'
import Link from 'gatsby-link'
import "./menu.css"

const Menu = ()  => (
        <div style={{
            background: '#0053A5',
        }}>
            <ul style={{
                listStyle: 'none',
                display: 'flex',
                justifyContent: 'space-evenly',
                color: 'white'
            }}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
            
        </div>
    )


export default Menu;