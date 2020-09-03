import React from 'react'
import Dropdown from './Dropdown';

function Nav() {


    return (
        <div>
            <nav className='navbar'>
                <div className='logo'>
                    {/* logo box */}
                </div>
                <div className='title'>
                    Backpack Guide
                </div>
                <button className='active'>
                    Login
                    {/* change to logout */}
                </button>
               
                <Dropdown/>
                
            </nav>
            
        </div>
    )
}

export default Nav
