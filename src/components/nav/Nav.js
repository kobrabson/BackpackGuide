import React from 'react'
import Dropdown from './Dropdown';
import './Nav.css'

function Nav() {


    return (
        <div>
            <nav className='navbar display-ib'>
                <div className='logo'>
                    {/* logo box */}
                </div>
                <div className='title display-ib'>
                    Backpack Guide
                </div>
                <div className='nav-container'>
                <button className='login navbar-item'>
                    Login
                    {/* change to logout */}
                </button>
                <span className='header-item'>about</span>
                
               
                <Dropdown/>

                </div>
                
            </nav>
            
        </div>
    )
}

export default Nav
