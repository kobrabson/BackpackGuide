import React from 'react'
import Dropdown from './Dropdown';
import { withRouter, Link } from 'react-router-dom';
import './Nav.css'

function Nav() {
    

    return (
        <div>
            <nav className='navbar display-ib'>
                <div className='logo'>
                    {/* logo box */}
                </div>

                <div 
                    className='title display-ib'>
                        Backpack Guide
                </div>

                <div className='nav-container'>

                <Link to='/Auth'>
                <button 
                    className='login navbar-item'>
                        Login                   
                </button></Link>

                <Link to='/about'>
                    <span 
                        className='header-item'>
                         about
                    </span></Link>
                
               
                <Dropdown/>

                </div>
                
            </nav>
            
        </div>
    )
}

export default withRouter(Nav)
